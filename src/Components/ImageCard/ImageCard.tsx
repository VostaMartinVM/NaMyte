import React, { FC } from "react"
import { Image } from "./Image"
import "./Card.scss"

type props = {
  imageUrl: Image
  text: string
}

const ImageCard: FC<props> = ({ imageUrl, text }) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl.url} alt={imageUrl.url}></img>
      </div>
      <div className='card-content'>
        <div className='card-body'>{text}</div>
      </div>
    </div>
  )
}

export default ImageCard
