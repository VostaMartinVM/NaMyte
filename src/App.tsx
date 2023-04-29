import { useState } from "react"
import { LanguageContext } from "./LanguageSettings"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const App = () => {
  const [language, setLanguage] = useState<string>()

  return (
    <>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Navbar />
        <Outlet />
      </LanguageContext.Provider>
    </>
  )
}

export default App
