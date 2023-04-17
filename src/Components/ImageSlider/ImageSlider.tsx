import React, { FC, useState } from "react"
import "./ImageSlider.scss"
import { Image } from "../ImageCard/Image"

type props = {
  images?: string[]
  styling: string
}

const ImageSlider: FC<props> = ({ images, styling }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide && images ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    if (images) {
      const isLastSlide = currentIndex === images.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }
  }
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  const slideStylesWidthBackground = {
    backgroundImage: `url(${images && images[currentIndex]})`,
  }

  return (
    <div className={styling}>
      <div className='arrowContainer'>
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ❱
        </div>
      </div>
      <div className='sliderStyles' style={slideStylesWidthBackground}></div>
      <div className='dotContainerStyle'>
        {images &&
          images.map((slide, slideIndex) => (
            <div
              className={currentIndex === slideIndex ? "activeDot" : "dotStyle"}
              key={slideIndex}
              onClick={() => {
                goToSlide(slideIndex)
              }}
            >
              ●
            </div>
          ))}
      </div>
    </div>
  )
}

export default ImageSlider
