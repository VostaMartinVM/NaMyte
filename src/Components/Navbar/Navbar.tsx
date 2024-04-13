import { FC, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getNavbarTranslated, getPicturesLogo } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { setLanguage } from "../../Redux/Slices/Languages"
import "./Navbar.scss"
import { MdEmail, MdRestaurant, MdOutlineSportsHandball } from "react-icons/md"
import { FaImages } from "react-icons/fa"
import { PiBowlFoodFill } from "react-icons/pi"
import { FaBed } from "react-icons/fa6"
import img from "20240408_125716.jpg"

const Navbar: FC = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [isLoading, setIsLoading] = useState(true)
  const [logoPictures, setLogoPictures] = useState<string[]>()
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const fetchedTranslation = await getNavbarTranslated()
        const fetchedPictures = await getPicturesLogo()
        setLogoPictures(fetchedPictures)
        setTranslationData(fetchedTranslation)
      } catch (error) {
        console.error("Error fetching data:", error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleLinkClick = (path: string) => {
    if (!isNavigating) {
      setIsNavigating(true)
      setActiveLink(path)
      setTimeout(() => {
        setIsNavigating(false)
      }, 500) // Adjust this delay as necessary for your animations
    }
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
      <div>
        <div className='topSection'>
          {logoPictures?.map((logoPicture, index) => {
            return (
              <>
                <Link to='/' key={index}>
                  <img src='20240408_125716' alt='Logo' />
                </Link>
              </>
            )
          })}
        </div>
        <ul className='navMenuItems'>
          {SidebarData.map((item, index) => {
            return (
              <li
                className={
                  location.pathname === item.path || activeLink === item.path
                    ? "activeLink navLink"
                    : "navLink"
                }
                key={index}
              >
                <Link to={item.path} onClick={() => handleLinkClick(item.path)}>
                  {item.icon}
                  <span className='menuText'>{isLoading ? item.skeleton : item.title}</span>
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
