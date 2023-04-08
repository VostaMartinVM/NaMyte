import React, { FC } from "react"
import { Image } from "./Image"
import "./ImageCard.scss"

type props = {
  imageUrl: Image
  text: string
}

const ImageCard: FC<props> = ({ imageUrl, text }) => {
  const slideStylesWidthBackground = {
    backgroundImage: `url(${imageUrl.url})`,
  }

  return <div className='imagecard-container' style={slideStylesWidthBackground}></div>
}

export default ImageCard
