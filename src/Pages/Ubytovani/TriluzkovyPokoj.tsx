import React, { FC, useEffect, useState } from "react"
import { getPicturesTriluzko } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"

const TriluzkovyPokoj: FC = () => {
  const [triluzkoPictures, setTriluzkoPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesTriluzko()
      setTriluzkoPictures(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div className='rooms'>
      <div className='containerStyles'>
        <ImageSlider pictures={triluzkoPictures} styling='roomImageSlider'></ImageSlider>
      </div>
      <div>
        <h1> le dvouluzkovy pokoj</h1>
        <p></p>
      </div>
    </div>
  )
}

export default TriluzkovyPokoj
