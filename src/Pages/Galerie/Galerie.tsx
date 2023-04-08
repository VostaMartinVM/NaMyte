import React, { FC } from "react"
import ImageCard from "../../Components/ImageCard/ImageCard"

const Galerie: FC = () => {
  const image = { url: "../images/image-1.jpg", title: "beach" }
  const text = "mrdka toto"

  return (
    <div className='page'>
      <ImageCard imageUrl={image} text={text}></ImageCard>
    </div>
  )
}

export default Galerie
