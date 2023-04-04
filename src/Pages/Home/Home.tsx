import React, { FC } from "react"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import "./Home.scss"

const Home: FC = () => {
  const slides = [
    { url: "../images/image-1.jpg", title: "beach" },
    { url: "../images/image-2.jpg", title: "boat" },
    { url: "../images/image-3.jpg", title: "forest" },
    { url: "../images/image-4.jpg", title: "city" },
    { url: "../images/image-5.jpg", title: "italy" },
  ]

  return (
    <div>
      <h1>Home</h1>
      <div className='containerStyles'>
        <ImageSlider images={slides} />
      </div>
    </div>
  )
}

export default Home
