import Carousel from "../../Components/Carousel/Carousel"
import { cardData } from "../../Constants/CardData/Game"
import './Home.css'
function Home() {
  return (
    <div className="home-layout"> 
    {/* <div>This is my home</div> */}
    {/* <div style={{backgroundColor:"GrayText"}}> */}
      <Carousel cardDataItems={cardData} heading={"This is Home layout gaming a section"} />
      <Carousel cardDataItems={cardData} heading={"This is Home layout gaming a section2"} />
    {/* </div> */}
    {/* <GameLayout/> */}
        
    </div>
  )
}

export default Home