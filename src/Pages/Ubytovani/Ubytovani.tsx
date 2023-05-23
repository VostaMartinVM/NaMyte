import React, { FC, useEffect, useState } from "react"
import "./Ubytovani.scss"
import { getPicturesJednoluzko, getUbytovaniPageMenuTranslated } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import { DocumentData } from "firebase/firestore"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"

const Ubytovani: FC = () => {
  const [jednoluzkoPictures, setJednoluzkoPictures] = useState<string[]>()
  const [translationData, setTranslationData] = useState<DocumentData>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesJednoluzko()
      const translatedUbytovani = await getUbytovaniPageMenuTranslated()
      setJednoluzkoPictures(fetchedPictures)
      setTranslationData(translatedUbytovani)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  return (
    <div className='rooms'>
      <div className='containerStyles'>
        <ImageSlider pictures={jednoluzkoPictures} styling='roomImageSlider'></ImageSlider>
      </div>
      <div>
        <h1></h1>
        <p>
          {translationData?.translated_output.info1[lg]}
          <br />
          {translationData?.translated_output.info2[lg]}
          <i>890 ,-Kč</i>
          <br />
          {translationData?.translated_output.info3[lg]}
          <br />
          {translationData?.translated_output.info4[lg]}
          <br />
          {translationData?.translated_output.info5[lg]}
          <br />
          {translationData?.translated_output.info6[lg]}
          <br />
        </p>
      </div>
    </div>
  )
}

export default Ubytovani
