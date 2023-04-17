import React, { FC, useEffect, useState } from "react"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import "./Home.scss"
import { getHomePage, getPicturesHomePage } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"

const Home: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()

  const [homePagePictures, setHomePagePictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getHomePage()
      const fetchedPictures = await getPicturesHomePage()
      setHomePagePictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
    }

    fetchData()
  }, [])

  const slides = [
    { url: homePagePictures, title: "beach", id: 1 },
    { url: "../images/image-2.jpg", title: "boat", id: 2 },
    { url: "../images/image-3.jpg", title: "forest", id: 3 },
    { url: "../images/image-4.jpg", title: "city", id: 4 },
    { url: "../images/image-5.jpg", title: "italy", id: 5 },
  ]

  return (
    <div className='home'>
      <div className='containerStyles'>
        <ImageSlider images={homePagePictures} styling='homeImageCard' />
      </div>
      <div className='text-container'>
        <div className='header'>
          <h1>{translationData?.translated_output.header.cs}</h1>
        </div>
        <div className='text'>
          <p>{translationData?.translated_output.introduction.cs} </p>
        </div>
      </div>
    </div>
  )
}

export default Home
