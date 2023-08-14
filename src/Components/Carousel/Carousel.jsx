import Card from "../Card/Card";
import "./Carousel.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Button from "../Button/Button";
import { noOfCardInScreen } from "../../Utils/Utils";
import { cardData as cardDataGame } from "../../Constants/CardData/Game";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const  Carousel = ({ heading, cardDataItems, backgroundColor }) => {

  const cardData = cardDataItems != undefined ? cardDataItems : cardDataGame;

  const FIRST_ELEMENT = "first-element";
  const MID_ELEMENT = "mid-element";
  const LAST_ELEMENT = "last-element";

  // const width="270px";
  // const height="220px";
  const [containerWidth, setContainerWidth] = useState(1920);
  const { width, size } = noOfCardInScreen(containerWidth);
  const [pageNo, setPageNo] = useState(1);
  const [lastPage, setLastPage] = useState(cardData.length);
  const [pageData, setPageData] = useState({
    prev: 0,
    next: 4,
  });

  useEffect(() => {
    setPageData((prev) => ({
      prev: pageNo * size - size,
      next: pageNo * size,
    }));
    setLastPage((prev) => Math.ceil(cardData.length / size));
  }, [containerWidth]);

  const containerRef = useRef(null);

  const prevButton = () => {
    setPageNo((prev) => prev - 1);

    //** */ starting page
    if (pageNo - 1 === 1) {
      setPageData((prev) => ({
        prev: 0,
        next: size,
      }));
    } else {
      setPageData((prev) => ({
        prev: prev.prev - size,
        next: prev.next - size,
      }));
    }
  };
  const nextButton = () => {
    setPageNo((prev) => prev + 1);

    //** last page
    if (lastPage === pageNo + 1) {
      setPageData((prev) => ({
        prev: cardData.length - size,
        next: cardData.length,
      }));
    } else {
      setPageData((prev) => ({
        prev: prev.prev + size,
        next: prev.next + size,
      }));
    }
  };

  useEffect(() => {
    // Function to get the container width
    const getContainerWidth = () => {
      if (containerRef.current) {
        const tempContainerWidth =
          containerRef.current.getBoundingClientRect().width;
        setContainerWidth((prev) => tempContainerWidth);
        console.log("Container Width:", tempContainerWidth);
      }
    };

    // Call the function when the component mounts or when its size changes
    getContainerWidth();

    // Event listener to update the container width on resize
    window.addEventListener("resize", getContainerWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", getContainerWidth);
    };
  }, []);

  return (
    // <div className="carousel" style={{ backgroundColor: backgroundColor }}>
    <div className="carousel" >
      <h3 className="carousel-heading">{heading}</h3>
      <div className="carousel-container">
        <div className="carousel-button-container">
          {pageNo !== 1 && (
            <Button
              classNames={"carousel-button prev"}
              buttonName="&#8656;"
              onClick={() => prevButton()}
            />
          )}
        </div>
        <div className="carousel-slider" ref={containerRef}>
          {cardData
            .filter(
              (card, index) =>
                index > pageData.prev - 1 && index < pageData.next
            )
            .map((card, index, arr) => {
              // console.log( "MP ", pageData, "Index ", index,arr)
              if (index === 0) {
                return (
                  <Link to={card.path} key={card.id}><Card
                    heading={card.heading}
                    content={card.body}
                    img={card.img}
                    
                    width={width}
                    hoverClassName={FIRST_ELEMENT}
                  /></Link>
                );
              } else if (index === size - 1 && arr.length >= size) {
                // console.log( "MP right ", pageData, "Index ", index)
                return (
                  <Link to={card.path}  key={card.id} ><Card
                    heading={card.heading}
                    content={card.body}
                    img={card.img}
                    width={width}
                    hoverClassName={LAST_ELEMENT}
                  /></Link>
                );
              }

              return (
                <Link to={card.path}  key={card.id} ><Card
                  heading={card.heading}
                  content={card.body}
                  img={card.img}
                  width={width}
                  hoverClassName={MID_ELEMENT}
                /></Link>
              );
            })}
        </div>
        <div className="carousel-button-container">
          {lastPage !== pageNo && (
            <Button
              classNames={"carousel-button next"}
              buttonName="&#8658;"
              onClick={() => nextButton()}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  backgroundColor: PropTypes.string,
  heading: PropTypes.string,
  cardDataItems: PropTypes.array,
};
Carousel.defaultProps = {
  backgroundColor: "rgb(250, 251, 253, 0.8)",
  heading: "this is default",
};
export default Carousel;
