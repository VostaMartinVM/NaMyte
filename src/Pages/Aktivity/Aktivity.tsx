import React, { FC } from "react"
import Card from "../../Components/Card/Card"

const Aktivity: FC = () => {
  const image = { url: "../images/image-1.jpg", title: "beach" }
  const title = "karta lol"
  const text = "ja nevim uz"

  return (
    <div className='page'>
      <Card title={title} imageUrl={image} text={text} />
    </div>
  )
}

export default Aktivity
