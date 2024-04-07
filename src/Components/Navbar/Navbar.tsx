import React, { FC, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"
import { getNavbarTranslated, getPicturesLogo } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { setLanguage } from "../../Redux/Slices/Languages"

import { MdEmail, MdRestaurant, MdOutlineSportsHandball } from "react-icons/md"
import { FaImages } from "react-icons/fa"
import { PiBowlFoodFill } from "react-icons/pi"
import { FaBed } from "react-icons/fa6"

const Navbar: FC = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  const handleLinkClick = (path: string) => {
    setActiveLink(path)
  }

  const dispatch = useDispatch()
  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const english = () => {
    dispatch(setLanguage("en"))
  }
  const cestina = () => {
    dispatch(setLanguage("cs"))
  }
  const nemcina = () => {
    dispatch(setLanguage("de"))
  }

  const [translationData, setTranslationData] = useState<DocumentData>()
  const [isLoading, setIsLoading] = useState(true)
  const [logoPictures, setLogoPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const fetchedTranslation = await getNavbarTranslated()
      const fetchedPictures = await getPicturesLogo()
      setLogoPictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const SidebarData = [
    {
      skeleton: "Denni nabidka",
      title: "Denni nabidka",
      path: "/DenniNabidka",
      icon: <MdRestaurant className='icon' />,
    },
    {
      skeleton: "Nabidka jidel",
      title: translationData?.translated_output.nabydkaJidel[lg],
      path: "/NabidkaJidel",
      icon: <PiBowlFoodFill className='icon' />,
    },
    {
      skeleton: "Ubytovani",
      title: translationData?.translated_output.ubytovani[lg],
      path: "/Ubytovani",
      icon: <FaBed className='icon' />,
    },
    {
      skeleton: "Galerie",
      title: translationData?.translated_output.galerie[lg],
      path: "/Galerie",
      icon: <FaImages className='icon' />,
    },
    {
      skeleton: "Aktivity",
      title: translationData?.translated_output.aktivity[lg],
      path: "/Aktivity",
      icon: <MdOutlineSportsHandball className='icon' />,
    },
    {
      skeleton: "O nas",
      title: translationData?.translated_output.oNas[lg],
      path: "/Onas",
      icon: <MdEmail className='icon' />,
    },
  ]

  return (
    <div className='containerNavbar'>
      <div className='navbar'>
        <div className='top-section'>
          {logoPictures?.map((logoPicture, index) => {
            return (
              <>
                <Link to='/' key={index}>
                  <img src={logoPicture} alt='Logo' />
                </Link>
              </>
            )
          })}
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
                  {item.icon}
                  <span className='menu-text'>{isLoading ? item.skeleton : item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className='languages'>
          <button className='cestina languageButton' onClick={cestina}>
            Czech
          </button>
          <button className='ajina languageButton' onClick={english}>
            English
          </button>
          <button className='nemcina languageButton' onClick={nemcina}>
            German
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
