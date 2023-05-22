import React, { FC } from "react"
import Card from "../../Components/Card/Card"
import { CardImage } from "../../Components/Card/CardImage"

type CardProps = {
  title: string
  imageUrl: CardImage
  text: string
  link: string
}

const Aktivity: FC = () => {
  const cards: CardProps[] = [
    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: "Výlety",
      text: "Tipy na výlety",
      link: "https://www.visittabor.eu/co-delat-v-tabore",
    },

    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: "Koupání",
      text: "Vodní sporty",
      link: "https://www.koupalistepohoda.cz/pohoda/",
    },

    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: "Tenis",
      text: "Tenisová hala",
      link: "https://tenissezimak.cz",
    },

    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: "Akce",
      text: "Kalendář akcí v Táboře",
      link: "https://www.visittabor.eu/kalendar-akci",
    },
  ]

  return (
    <div className='page'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  )
}

export default Aktivity
