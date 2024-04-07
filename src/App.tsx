import { useEffect, useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io"

const ScrollToggleButton = () => {
  const [isTop, setIsTop] = useState(false)
  const scrolObj = document.getElementById("galeryScroll")

  useEffect(() => {
    scrolObj?.addEventListener("scroll", () => {
      if (scrolObj.scrollTop != scrolObj.scrollHeight - scrolObj.offsetHeight) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    })
  })

  const scrollUP = () => {
    if (scrolObj) {
      scrolObj.scroll({ top: 0, behavior: "smooth" })
    }
  }

  const scrollDown = () => {
    if (scrolObj) {
      scrolObj.scroll({ top: scrolObj.scrollHeight, behavior: "smooth" })
    }
  }

  return (
    <div onClick={isTop ? scrollDown : scrollUP} className='scrollButton'>
      {isTop ? <IoIosArrowDropdown className='icon' /> : <IoIosArrowDropup className='icon' />}
    </div>
  )
}

const App = () => {
  const [language, setLanguage] = useState<string>()
  const persistor = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className='siteBackground'>
            <Navbar />
            <div id='galeryScroll' className='pageContainer'>
              <Outlet />
              <ScrollToggleButton />
            </div>
          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
