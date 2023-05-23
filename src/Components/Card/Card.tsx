import React, { FC } from "react"
import "./Card.scss"
import { CardImage } from "./CardImage"

type CardProps = {
  title: string
  imageUrl: CardImage
  text: string
  link: string
}

const Card: FC<CardProps> = ({ title, imageUrl, text, link }) => {
  const HandleOnClick = () => {
    window.location.href = link
  }
  return (
    <div className='card-container' onClick={HandleOnClick}>
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
