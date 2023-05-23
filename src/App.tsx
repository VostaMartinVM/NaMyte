import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./Redux/store"
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"

const App = () => {
  const [language, setLanguage] = useState<string>()
  const persistor = persistStore(store)

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <div className='pageContainer'>
            <Outlet />
          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
