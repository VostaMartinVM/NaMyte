import React, { FC, useState, useEffect, useRef } from "react"
import { Image } from "./Image"
import "./ImageCard.scss"
import ImageSlider from "../ImageSlider/ImageSlider"

type props = {
  image: string
  styling: string
}

const ImageCard: FC<props> = ({ image, styling }) => {
  const slideStylesWidthBackground = {
    backgroundImage: `url(${image})`,
  }

  const [modal, setModal] = useState<boolean>(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      if (modalRef.current && e.target instanceof Node && !modalRef.current.contains(e.target)) {
        setModal(false)
        console.log(modalRef.current)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [modal])

  return (
    <>
      <div
        className='imagecard-container'
        style={slideStylesWidthBackground}
        onClick={toggleModal}
      ></div>

      {modal && (
        <div>
          <div className='overlay'>
            <div className='modal-content' ref={modalRef}>
              <ImageSlider images={[image]} styling={styling} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCard
