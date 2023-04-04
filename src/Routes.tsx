import React from "react";
import Aktivity from "./Pages/Aktivity";
import Galerie from "./Pages/Galerie";
import Home from "./Pages/Home";
import NabidkaJidel from "./Pages/NabidkaJidel";
import Onas from "./Pages/Onas";
import Ubytovani from "./Pages/Ubytovani";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const Routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "NabidkaJidel",
        element: <NabidkaJidel />,
      },
      {
        path: "Ubytovani",
        element: <Ubytovani />,
      },
      {
        path: "Galerie",
        element: <Galerie />,
      },
      {
        path: "Aktivity",
        element: <Aktivity />,
      },
      {
        path: "Onas",
        element: <Onas />,
      },
    ],
  },
]);

export default Routes;
