import React, { FC, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import "./Navbar.scss"
import logoMenu from "../../Images/logoImg.png"
import path from "path"

const Navbar: FC = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <div className='top-section'>
            <Link to='/'>
              <img src={logoMenu} alt='Logo' />
            </Link>
          </div>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li
                  className={
                    location.pathname === item.path || activeLink === item.path
                      ? "active-link nav-link"
                      : "nav-link"
                  }
                  key={index}
                >
                  <Link to={item.path} onClick={() => handleLinkClick(item.path)}>
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
