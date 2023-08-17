import About from "../pages/About/About";
import NoPage from "../Components/NotFoundPage/NotFound";
import Game from "../pages/Game/Game";
import Home from "../pages/Home/Home";
import TicTacToe from "Game/TicTacToe";
import { v4 as uuid } from "uuid";

export const PublicRouter1 = [
  { id: uuid(), path: "/", index: true, component: Home },
  {
    id: uuid(),
    path: "/game",
    component: Game,
    hasSubRoutes: [
      {
        id: uuid(),
        path: "/game/tic-tac-toe",
        component: TicTacToe,
        index: true
      },
      {
        id: uuid(),
        path: "/game/tic-tac-toe1",
        component: TicTacToe,
      },
      {
        id: uuid(),
        path: "/game/tic-tac-toe2",
        component: TicTacToe,
      },
      {
        id: uuid(),
        path: "/game/*",
        component: NoPage,
      },
    ],
  },
  {
    id: uuid(),
    path: "/about-me",
    component: About,
  },
  {
    id: uuid(),
    path: "*",
    component: NoPage,
  },
];
