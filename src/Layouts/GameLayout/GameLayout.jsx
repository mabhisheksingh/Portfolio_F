import {NavLink, Outlet } from "react-router-dom";
import { cardData } from "../../Constants/CardData/Game";
import { v4 as uuid } from "uuid";
import "./GameLayout.css";

function Game() {
  return (
    <>
      <div className="games-layout">
        <div className="games-option">
          <div className="games-heading-container">
            <span className="games-heading text-white text-bold">Games</span>
          </div>
          <div className="games text-default text-m">
            {
              cardData.map( (game) =>{
                return <NavLink key={game.id} to={game.path} style={{ textDecoration:"none"}}><div  className="game text-white">{game.heading}</div></NavLink>
              })
            }
          </div>
        </div>
        <div className="game-window">
          <Outlet key={uuid()} />
        </div>
      </div>
    </>
  );
}

export default Game;
