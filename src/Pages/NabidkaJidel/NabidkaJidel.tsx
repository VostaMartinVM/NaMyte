import { FC } from "react"
import { Outlet, RouterProvider } from "react-router-dom"
import TopNavbar from "../../Components/TopNavbar/TopNavbar"
import { NabidkaJidelData } from "./NabidkaJidelData"
import "./NabidkaJidel.scss"

const NabidkaJidel: FC = () => {
  return (
    <div className='nabidkaJidel'>
      <TopNavbar menuItems={NabidkaJidelData}></TopNavbar>

      <Outlet />
    </div>
  )
}
export default NabidkaJidel
