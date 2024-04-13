import { FC } from "react"
import "./Card.scss"

type CardProps = {
  title: string
  imageUrl: CardImage
  text: string
  link: string
}

type CardImage = {
  url: string
  title: string
}

const Card: FC<CardProps> = ({ title, imageUrl, text, link }) => {
  const HandleOnClick = () => {
    window.location.href = link
  }
  return (
    <div className='cardContainer' onClick={HandleOnClick}>
      <div className='imageContainer'>
        <img src={imageUrl.url} alt={imageUrl.url}></img>
      </div>
      <div className='cardContent'>
        <div className='cardCitle'>
          <h3>{title}</h3>
        </div>
        <div className='cardCody'>{text}</div>
      </div>
    </div>
  )
}

export default Card
