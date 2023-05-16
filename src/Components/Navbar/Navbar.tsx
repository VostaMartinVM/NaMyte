import React, { FC, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"
import { getNavbarTranslated, getPicturesLogo } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { setLanguage } from "../../Redux/Slices/Languages"

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
      title: translationData?.translated_output.nabydkaJidel[lg],
      path: "/NabidkaJidel/DenniMenu",
    },
    {
      title: translationData?.translated_output.ubytovani[lg],
      path: "/Ubytovani/JednoluzkovyPokoj",
    },
    {
      title: translationData?.translated_output.galerie[lg],
      path: "/Galerie",
    },
    {
      title: translationData?.translated_output.aktivity[lg],
      path: "/Aktivity",
    },
    {
      title: translationData?.translated_output.oNas[lg],
      path: "/Onas",
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
                  <span className='menu-text'>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <button className='cestina' onClick={cestina}>
          cestina
        </button>
        <button className='ajina' onClick={english}>
          ajina
        </button>
        <button className='nemcina'>nemcina</button>
      </div>
    </div>
  )
}

export default Navbar
