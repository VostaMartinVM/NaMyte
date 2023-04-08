import React, { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import "./TopNavbar.scss"
import { TopNavbarType } from "./TopNavbarType"

type props = {
  menuItems: TopNavbarType[]
}

const TopNavbar: FC<props> = ({ menuItems }) => {
  const location = useLocation()

  return (
    <>
      <div className='topbar-container'>
        {menuItems.map((item, index) => {
          return (
            <div
              className={
                location.pathname === item.path ? "active-menu-item menu-item" : "menu-item"
              }
              key={index}
            >
              <Link to={item.path}>
                <span className='menu-text'>{item.title}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TopNavbar
