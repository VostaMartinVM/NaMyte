import React, { FC, useEffect, useState } from "react"
import { getPicturesDvouluzko } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"

const DvouluzkovyPokoj: FC = () => {
  const [dvouluzkoPictures, setDvouluzkoPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesDvouluzko()
      setDvouluzkoPictures(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div className='rooms'>
      <div className='containerStyles'>
        <ImageSlider pictures={dvouluzkoPictures} styling='roomImageSlider'></ImageSlider>
      </div>
      <div>
        <h1> le dvouluzkovy pokoj</h1>
        <p></p>
      </div>
    </div>
  )
}

export default DvouluzkovyPokoj
