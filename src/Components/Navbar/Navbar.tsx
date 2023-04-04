import React, { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import "./Navbar.scss"

const Navbar: FC = () => {
  const location = useLocation()

  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <div className='top-section'>
            <h1>Le logo</h1>
          </div>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  id={item.id}
                  className={location.pathname === item.path ? "active-link" : ""}
                >
                  <Link to={item.path}>
                    <span className='menu-text'>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
