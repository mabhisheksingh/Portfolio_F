import About from "../pages/About/About";
import NoPage from "../Components/NotFoundPage/NotFound";
import { v4 as uuid } from "uuid";
import GameLayout from "../Layouts/GameLayout/GameLayout";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import  { Suspense, lazy } from "react";

const LazyTicTacToe = lazy(() => import("Game/TicTacToe"));

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
      ],
    },
    {
      id: uuid(),
      path: "/game",
      element: <GameLayout />,
      children: [
        {
          id: uuid(),
          path: "/game/tic-tac-toe",
          element: (
            <Suspense fallback={<div>...Loading</div>}>
              <LazyTicTacToe />
            </Suspense>
          ),
          index: true,
        },
        {
          id: uuid(),
          path: "/game/tic-tac-toe1",
          element: (
            <Suspense fallback={<div>...Loading</div>}>
              <LazyTicTacToe />
            </Suspense>
          ),
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
