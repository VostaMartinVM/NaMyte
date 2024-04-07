import React, { FC, useEffect, useState } from "react"
import "./Ubytovani.scss"
import { getPicturesUbytovani, getUbytovaniPageMenuTranslated } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import { DocumentData } from "firebase/firestore"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { TbBrandBooking } from "react-icons/tb"
import { url } from "inspector"

const Ubytovani: FC = () => {
  const [ubytovaniPictures, setUbytovaniPictures] = useState<string[]>()
  const [translationData, setTranslationData] = useState<DocumentData>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesUbytovani()
      const translatedUbytovani = await getUbytovaniPageMenuTranslated()
      setUbytovaniPictures(fetchedPictures)
      setTranslationData(translatedUbytovani)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const booking = () => {
    window.location.href = "https://www.booking.com/Share-V7jHm6B"
  }

  return (
    <div className='rooms'>
      <div className='containerStyles'>
        <ImageSlider pictures={ubytovaniPictures} styling='roomImageSlider'></ImageSlider>
      </div>
      <div className='homeHeader'>
        <h1>Ubytovani</h1>
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
      <div className='booking'>
        <TbBrandBooking onClick={booking} className='icon' />
      </div>
    </div>
  )
}

export default Ubytovani
