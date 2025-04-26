import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import GamesHomePage from "../../features/games/pages/GamesHomePage";
import GameDetailsPage from "../../features/games/pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <GamesHomePage /> },
      { path: "/games/:id", element: <GameDetailsPage /> },
    ],
  },
  {
    path: "/auth",
    element: <MainLayout />,
    children: [
      /*...*/
    ],
  },
]);

export default router;
