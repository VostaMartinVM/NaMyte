import { FC } from "react"
import { Outlet } from "react-router-dom"
import TopNavbar from "../../Components/TopNavbar/TopNavbar"
import { UbytovaniData } from "./UbytovaniData"
import "./Ubytovani.scss"

const Ubytovani: FC = () => {
  return (
    <div className='ubytovani'>
      <TopNavbar menuItems={UbytovaniData}></TopNavbar>
      <Outlet />
    </div>
  )
}

export default Ubytovani
