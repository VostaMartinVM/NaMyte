import { FC } from "react"
import { Outlet, RouterProvider } from "react-router-dom"
import TopNavbar from "../../Components/TopNavbar/TopNavbar"
import { NabidkaJidelData } from "./NabidkaJidelData"

const NabidkaJidel: FC = () => {
  return (
    <div className='page'>
      <TopNavbar menuItems={NabidkaJidelData}></TopNavbar>

      <Outlet />
    </div>
  )
}
export default NabidkaJidel
