import React, { FC, useEffect, useState } from "react"
import "./ImageSlider.scss"

type props = {
  images?: string[]
  styling: string
}

const ImageSlider: FC<props> = ({ images, styling }) => {
  const [currentImg, setCurrentImg] = useState(images)
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

  useEffect(() => {
    setCurrentImg(images)
  }, [images])

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
      <div className='sliderStyles'>
        <img className='sliderImage' src={currentImg && currentImg[currentIndex]}></img>
      </div>
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
