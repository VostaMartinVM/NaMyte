import { FC, useEffect, useState } from "react"
import "./Home.scss"
import { getHomePageTranslated, getPicturesHomePage } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import { RootState } from "../../Redux/store"
import { useDispatch, useSelector } from "react-redux"

const Home: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()

  const [homePagePictures, setHomePagePictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getHomePageTranslated()
      const fetchedPictures = await getPicturesHomePage()
      setHomePagePictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
    }

    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  return (
    <div className='home'>
      <div className='containerStyles'>
        <ImageSlider pictures={homePagePictures} styling='homeImageCard' />
      </div>
      <div className='text-container'>
        <div className='homeHeader'>
          <h1>{translationData ? translationData.translated_output.header[lg] : "Home"}</h1>
        </div>
        <div className='text'>
          <p>{translationData?.translated_output.introduction[lg]} </p>
        </div>
      </div>
    </div>
  )
}

export default Home
