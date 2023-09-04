import { v4 as uuid } from "uuid";
import img1 from "../../assets/Sign-50.jpg";

export const cardData = [
  {
    id: uuid(),
    heading: "TicTacToe",
    body: "This body 1",
    img: img1,
    path: "/game/tic-tac-toe",
  },
  {
    id: uuid(),
    heading: "Magic Match1",
    body: "This body 2",
    img: img1,
    path: "/game/magic-match1",
  },
  {
    id: uuid(),
    heading: "Heading3",
    body: "This body 1",
    img: img1,
    path: "/game/tic-tac-toe3",
  },
  {
    id: uuid(),
    heading: "Heading4",
    body: "This body 1",
    img: img1,
    path: "/game/tic-tac-toe",
  },
  {
    id: uuid(),
    heading: "Heading5",
    body: "This body 1",
    img: img1,
    path: "/game/tic-tac-toe",
  },
  {
    id: uuid(),
    heading: "Heading6",
    body: "This body 1",
    img: img1,
    path: "/game/tic-tac-toe",
  }
];
