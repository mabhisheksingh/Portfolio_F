import About from "../Components/About/About";
import NoPage from "../Components/NotFoundPage/NotFound";
import GameLayout from "../Layouts/Game/GameLayout";
import HomeLayout from "../Layouts/Home/HomeLayout";
import TicTacToe from "Game/TicTacToe";
import { v4 as uuid } from "uuid";

export const PublicRouter1 = [
  { id: uuid(), path: "/", index: true, component: HomeLayout },
  {
    id: uuid(),
    path: "/game",
    component: GameLayout,
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

/**
 * @depreciated
 * not using now
 */
export const PublicRouter = [
  { id: uuid(), path: "/", isIndex: true, component: HomeLayout },
  {
    id: uuid(),
    path: "/game",
    isIndex: false,
    component: GameLayout,
  },
  {
    id: uuid(),
    path: "/about-me",
    isIndex: false,
    component: About,
  },
  {
    id: uuid(),
    path: "game/tic-tac-toe",
    isIndex: false,
    component: TicTacToe,
  },
  {
    id: uuid(),
    path: "*",
    isIndex: false,
    component: NoPage,
  },
];
