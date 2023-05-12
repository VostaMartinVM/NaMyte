import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import "./Styles/styles.scss"
import Aktivity from "./Pages/Aktivity/Aktivity"
import Galerie from "./Pages/Galerie/Galerie"
import Home from "./Pages/Home/Home"
import NabidkaJidel from "./Pages/NabidkaJidel/NabidkaJidel"
import DenniMenu from "./Pages/NabidkaJidel/DenniMenu"
import VikendoveMenu from "./Pages/NabidkaJidel/VikendoveMenu"
import JidelniListek from "./Pages/NabidkaJidel/JidelniListek"
import Onas from "./Pages/Onas/Onas"
import Ubytovani from "./Pages/Ubytovani/Ubytovani"
import JednoluzkovyPokoj from "./Pages/Ubytovani/JednoluzkovyPokoj"
import DvouluzkovyPokoj from "./Pages/Ubytovani/DvouluzkovyPokoj"
import TriluzkovyPokoj from "./Pages/Ubytovani/TriluzkovyPokoj"
import Admin from "./Pages/Admin/Admin"
import App from "./App"
import Login from "./Pages/Login/Login"
import AuthRoute from "./Auth"

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''>
      <Route path='Login' element={<Login />} />
      <Route
        path='Admin'
        element={
          <AuthRoute>
            <Admin />
          </AuthRoute>
        }
      />
      <Route path='' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='NabidkaJidel' element={<NabidkaJidel />}>
          <Route path='DenniMenu' element={<DenniMenu />} />
          <Route path='VikendoveMenu' element={<VikendoveMenu />} />
          <Route path='JidelniListek' element={<JidelniListek />} />
        </Route>
        <Route path='Ubytovani' element={<Ubytovani />}>
          <Route path='JednoluzkovyPokoj' element={<JednoluzkovyPokoj />} />
          <Route path='DvouluzkovyPokoj' element={<DvouluzkovyPokoj />} />
          <Route path='TriluzkovyPokoj' element={<TriluzkovyPokoj />} />
        </Route>
        <Route path='Galerie' element={<Galerie />} />
        <Route path='Aktivity' element={<Aktivity />} />
        <Route path='Onas' element={<Onas />} />
      </Route>
    </Route>,
  ),
)

export default Routes
