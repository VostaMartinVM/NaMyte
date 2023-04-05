import React, { FC } from "react"
import "./Card.scss"
import { CardImage } from "./CardImage"

type props = {
  title: string
  imageUrl: CardImage
  text: string
}

const Card: FC<props> = ({ title, imageUrl, text }) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl.url} alt={imageUrl.url}></img>
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-body'>{text}</div>
      </div>
    </div>
  )
}

export default Card
