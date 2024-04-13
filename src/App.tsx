import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes, useLocation } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"
import "./Styles/styles.scss"
import Aktivity from "./Pages/Aktivity/Aktivity"
import Galerie from "./Pages/Galerie/Galerie"
import Home from "./Pages/Home/Home"
import NabidkaJidel from "./Pages/NabidkaJidel/NabidkaJidel"
import DenniNabidka from "./Pages/DenniNabidka/DenniNabidka"
import Onas from "./Pages/Onas/Onas"
import Ubytovani from "./Pages/Ubytovani/Ubytovani"
import Admin from "./Pages/Admin/Admin"
import Login from "./Pages/Login/Login"
import AuthRoute from "./Auth"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const [language, setLanguage] = useState<string>()
  const persistor = persistStore(store)
  const location = useLocation()

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className='siteBackground'>
            <Navbar />
            <AnimatePresence mode='wait'>
              <Routes key={location.pathname} location={location}>
                <Route path='Login' element={<Login />} />
                <Route
                  path='Admin'
                  element={
                    <AuthRoute>
                      <Admin />
                    </AuthRoute>
                  }
                />
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='NabidkaJidel' element={<NabidkaJidel />} />
                <Route path='DenniNabidka' element={<DenniNabidka />} />
                <Route path='Ubytovani' element={<Ubytovani />} />
                <Route path='Galerie' element={<Galerie />} />
                <Route path='Aktivity' element={<Aktivity />} />
                <Route path='Onas' element={<Onas />} />
              </Routes>
            </AnimatePresence>
          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
