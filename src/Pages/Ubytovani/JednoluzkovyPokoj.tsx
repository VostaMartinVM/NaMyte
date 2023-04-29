import React, { FC, useEffect, useState } from "react"
import { getPicturesJednoluzko } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"

const JednoluzkovyPokoj: FC = () => {
  const [jednoluzkoPictures, setJednoluzkoPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesJednoluzko()
      setJednoluzkoPictures(fetchedPictures)
      console.log(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div className='rooms'>
      <div className='containerStyles'>
        <ImageSlider images={jednoluzkoPictures} styling='roomImageSlider'></ImageSlider>
      </div>
      <div>
        <h1> le jednoluzkovy pokoj</h1>
        <p></p>
      </div>
    </div>
  )
}

export default JednoluzkovyPokoj
