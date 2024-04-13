import { FC, useEffect, useState } from "react"
import "./ImageSliderPopup.scss"
import { Picture } from "../../Pages/Galerie/Galerie"

type props = {
  id: number
  pictures: Picture[]
}

const ImageSliderPopup: FC<props> = ({ id, pictures }) => {
  const [currentImg, setCurrentImg] = useState<string | undefined>()
  const [currentIndex, setCurrentIndex] = useState(id)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide && pictures ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    if (pictures) {
      const isLastSlide = currentIndex === pictures.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const picture = pictures.find((p) => p.id === currentIndex)?.src
    if (picture) {
      setCurrentImg(picture)
    }
  }, [currentIndex, pictures])

  return (
    <div className='imageSliderPopup'>
      <div className='arrowContainer'>
        <div onClick={goToPrevious} className='leftArrowStyles'>
          ❰
        </div>
        <div onClick={goToNext} className='rightArrowStyles'>
          ❱
        </div>
      </div>
      <div className='sliderStyles'>
        <img className='sliderImage' src={currentImg}></img>
      </div>
    </div>
  )
}

export default ImageSliderPopup
