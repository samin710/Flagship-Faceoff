import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLaout/MainLaout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("phones.json"),
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
      {
        path: "phoneDetails",
        Component: PhoneDetails,
      },
    ],
  },
]);

export default router;
