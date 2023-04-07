import React, { FC } from "react"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import "./Home.scss"

const Home: FC = () => {
  const slides = [
    { url: "../images/image-1.jpg", title: "beach", id: 1 },
    { url: "../images/image-2.jpg", title: "boat", id: 2 },
    { url: "../images/image-3.jpg", title: "forest", id: 3 },
    { url: "../images/image-4.jpg", title: "city", id: 4 },
    { url: "../images/image-5.jpg", title: "italy", id: 5 },
  ]

  return (
    <div className='home'>
      <div className='containerStyles'>
        <ImageSlider images={slides} />
      </div>
    </div>
  )
}

export default Home
