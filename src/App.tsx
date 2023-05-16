import { useState } from "react"
import { LanguageContext } from "./LanguageSettings"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"

const App = () => {
  const [language, setLanguage] = useState<string>()

  return (
    <>
      <Provider store={store}>
        <LanguageContext.Provider value={[language, setLanguage]}>
          <Navbar />
          <div className='pageContainer'>
            <Outlet />
          </div>
        </LanguageContext.Provider>
      </Provider>
    </>
  )
}

export default App
