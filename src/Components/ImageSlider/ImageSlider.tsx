import React, { FC, useState } from "react"
import { HomeImages } from "./HomeImages"
import "./ImageSlider.scss"

type props = {
  images: HomeImages[]
}

const ImageSlider: FC<props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  const slideStylesWidthBackground = {
    backgroundImage: `url(${images[currentIndex].url})`,
  }

  return (
    <div className='slideStyles'>
      <div>
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ❱
        </div>
      </div>
      <div className='sliderStyles' style={slideStylesWidthBackground}></div>
      <div className='dotContainerStyle'>
        {images.map((slide, slideIndex) => (
          <div
            className='dotStyle'
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
