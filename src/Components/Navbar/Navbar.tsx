import React, { FC, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"
import { getNavbarTranslated, getPicturesLogo } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore"

const Navbar: FC = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  const [translationData, setTranslationData] = useState<DocumentData>()

  const [logoPictures, setLogoPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getNavbarTranslated()
      const fetchedPictures = await getPicturesLogo()
      setLogoPictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
    }

    fetchData()
  }, [])

  const SidebarData = [
    {
      title: "NabidkaJedel",
      path: "/NabidkaJidel/DenniMenu",
    },
    {
      title: "Ubytovani",
      path: "/Ubytovani/JednoluzkovyPokoj",
    },
    {
      title: "Galerie",
      path: "/Galerie",
    },
    {
      title: "Aktivity",
      path: "/Aktivity",
    },
    {
      title: "Onas",
      path: "/Onas",
    },
  ]

  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <div className='top-section'>
            {logoPictures && logoPictures[0] && (
              <Link to='/'>
                <img src={logoPictures[0]} alt='Logo' />
              </Link>
            )}
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
