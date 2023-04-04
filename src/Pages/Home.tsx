import React, { FC } from "react"
import ImageSlider from "../Components/ImageSlider/ImageSlider"

const Home: FC = () => {
  const slides = [
    { url: "/images/image-1.jpg", title: "beach" },
    { url: "/images/image-2.jpg", title: "boat" },
    { url: "/images/image-3.jpg", title: "forest" },
    { url: "/images/image-4.jpg", title: "city" },
    { url: "/images/image-5.jpg", title: "italy" },
  ]

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  }

  return (
    <div>
      <h1>Home</h1>
      <div style={containerStyles}>
        <ImageSlider images={slides} />
      </div>
    </div>
  )
}

export default Home
