import React, { FC } from "react"
import ImageCard from "../../Components/ImageCard/ImageCard"

const Galerie: FC = () => {
  const image = "../images/image-1.jpg"
  const text = "imageCardSlider"

  return (
    <div className='page'>
      <ImageCard image={image} styling={text}></ImageCard>
    </div>
  )
}

export default Galerie
