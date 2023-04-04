import React from "react"
import Aktivity from "./Pages/Aktivity/Aktivity"
import Galerie from "./Pages/Galerie/Galerie"
import Home from "./Pages/Home/Home"
import NabidkaJidel from "./Pages/NabidkaJidel/NabidkaJidel"
import Onas from "./Pages/Onas/Onas"
import Ubytovani from "./Pages/Ubytovani/Ubytovani"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router"
import { createBrowserRouter } from "react-router-dom"

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

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
])

export default Routes
