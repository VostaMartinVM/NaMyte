import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getJidelniListekTranslated } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"
import "./DenniNabidka.scss"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

const DenniNabidka: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const fetchedTranslation = await getJidelniListekTranslated()
        setTranslationData(fetchedTranslation)
      } catch (error) {
        console.error("Error fetching data:", error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  return (
    <AnimatedWrapper>
      <div className='nabidkaJidel'>
        <div className='homeHeader'>
          <h1>Home</h1>
        </div>
      </div>
    </AnimatedWrapper>
  )
}
export default DenniNabidka
