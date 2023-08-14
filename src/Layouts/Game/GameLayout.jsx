import {NavLink, Outlet } from "react-router-dom";
import { cardData } from "../../Constants/CardData/Game";
import { v4 as uuid } from "uuid";
import "./GameLayout.css";

function GameLayout() {
  return (
    <>
      <div className="games-layout">
        <div className="games-option">
          <div className="games-heading-container">
            <span className="games-heading">Games</span>
          </div>
          <div className="games">
            {
              cardData.map( (game) =>{
                return <NavLink key={game.id} to={game.path} style={{ textDecoration:"none"}}><div  className="game">{game.heading}</div></NavLink>
              })
            }
          </div>
        </div>
        <div className="game-window">
          <Outlet key={uuid()} />
        </div>
      </div>
      {/* <Carousel cardDataItems={cardData} heading={"This is game a section"}/> */}
    </>
  );
}

export default GameLayout;
