import React from "react"
import Galerie, { Image } from "../Pages/Galerie/Galerie"

const images: Image[] = [
  {
    id: "1",
    src: "srcImages/1.JPG",
    alt: "Example image 1",
    styling: "landscape",
  },
  {
    id: "2",
    src: "srcImages/2.JPG",
    alt: "Example image 2",
    styling: "landscape",
  },
  {
    id: "3",
    src: "Images/3.JPG",
    alt: "Example image 3",
    styling: "landscape",
  },
]

const MyGallery: React.FC = () => {
  return <Galerie images={images} />
}

export default MyGallery
