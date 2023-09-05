import {NavLink, Outlet } from "react-router-dom";
import { cardData } from "../../Constants/CardData/Game";
import { v4 as uuid } from "uuid";
import "./GameLayout.css";
import {GiHamburgerMenu } from 'react-icons/gi'
import {RxCross1 } from 'react-icons/rx'
import { useState } from "react";

function Game() {

  const [hamBurger, setHamBurger] = useState(true);
  return (
    <>
      <div className="games-layout">
        <div className="games-option">
          <div className="games-heading-container bg-color-dark">
            <span className="games-heading text-white text-bold ">
              { hamBurger ? <GiHamburgerMenu  />:<RxCross1/>}Games
              </span>
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
