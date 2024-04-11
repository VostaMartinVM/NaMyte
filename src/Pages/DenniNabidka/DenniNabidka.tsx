import { FC, useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import "./DenniNabidka.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getJidelniListekTranslated } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"

const DenniNabidka: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getJidelniListekTranslated()
      setTranslationData(fetchedTranslation)
      console.log(fetchedTranslation)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  return (
    <div className='nabidkaJidel'>
      <div className='homeHeader'>
        <h1>Home</h1>
      </div>
    </div>
  )
}
export default DenniNabidka
