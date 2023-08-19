import About from "../pages/About/About";
import NoPage from "../Components/NotFoundPage/NotFound";
import TicTacToe from "Game/TicTacToe";
import { v4 as uuid } from "uuid";
import GameLayout from "../Layouts/GameLayout/GameLayout";
import {  useRoutes } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";

export default function PublicRoutes() {
  
  const PublicRouters = [
    {
      id: uuid(),
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          id: uuid(),
          element: <Home />,
          index: true,

        },
      ]
    },
    {
      id: uuid(),
      path: "/game",
      element: <GameLayout />,
      children: [
        {
          id: uuid(),
          path: "/game/tic-tac-toe",
          element: <TicTacToe />,
          index: true,
        },
        {
          id: uuid(),
          path: "/game/tic-tac-toe1",
          element: <TicTacToe />,
        },
        {
          id: uuid(),
          path: "/game/tic-tac-toe2",
          element: <TicTacToe />,
        },
        {
          id: uuid(),
          path: "/game/*",
          element: <NoPage />,
        },
      ],
    },
    {
      id: uuid(),
      path: "/about-me",
      element: <About />,
    },
    {
      id: uuid(),
      path: "*",
      element: <NoPage />,
    },
  ];

  return useRoutes(PublicRouters);
}
