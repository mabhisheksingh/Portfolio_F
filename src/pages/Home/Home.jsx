import Carousel from "../../Components/Carousel/Carousel"
import { cardData } from "../../Constants/CardData/Game"
import './Home.css'
function Home() {
  return (
    <div className="home"> 
    {/* <div>This is my home</div> */}
    {/* <div style={{backgroundColor:"GrayText"}}> */}
      <Carousel cardDataItems={cardData} heading={"This is Home layout gaming a section"} />
      {/* <Carousel cardDataItems={cardData} heading={"This is Home layout gaming a section2"} />
      <Carousel cardDataItems={cardData} heading={"This is Home layout gaming a section3"} />
      <Carousel cardDataItems={cardData} heading={"This is Home layout gaming a section3"} /> */}
    {/* </div> */}
    {/* <GameLayout/> */}
        
    </div>
  )
}

export default Home