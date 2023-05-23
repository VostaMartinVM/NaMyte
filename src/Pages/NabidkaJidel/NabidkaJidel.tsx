import { FC, useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import "./NabidkaJidel.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getNabidkaJidelTranslated } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"

const NabidkaJidel: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getNabidkaJidelTranslated()
      setTranslationData(fetchedTranslation)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const menuItems = translationData
    ? [
        {
          title: translationData?.translated_output.denniMenu[lg],
          path: "/NabidkaJidel/DenniMenu",
        },
        {
          title: translationData?.translated_output.vikendoveMenu[lg],
          path: "/NabidkaJidel/VikendoveMenu",
        },
        {
          title: translationData?.translated_output.jedilniListek[lg],
          path: "/NabidkaJidel/JidelniListek",
        },
      ]
    : []

  return (
    <div className='nabidkaJidel'>
      <div className='topbar-container'>
        {menuItems.map((item, index) => {
          return (
            <div
              className={location.pathname === item.path ? "active-menu-item" : "menu-item"}
              key={index}
            >
              <Link to={item.path}>
                <span className='menu-text'>{item.title}</span>
              </Link>
            </div>
          )
        })}
      </div>

      <Outlet />
    </div>
  )
}
export default NabidkaJidel
