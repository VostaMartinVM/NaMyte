import React, { FC } from "react"
import ImageCard from "../../Components/ImageCard/ImageCard"
import MyGallery from "../../Images/Images"

export type Image = {
  id: string
  src: string
  alt: string
  styling: string
}

type Props = {
  images: Image[]
}

const Galerie: React.FC<Props> = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          id={image.id}
          src={image.src}
          alt={image.alt}
          styling={image.styling}
        />
      ))}
    </div>
  )
}

export default Galerie
