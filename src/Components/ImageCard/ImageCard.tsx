import { FC, useState, useEffect, useRef } from "react"
import "./ImageCard.scss"
import { Picture } from "../../Pages/Galerie/Galerie"
import ImageSliderPopup from "../ImageSliderPopup/ImageSliderPopup"

type Props = {
  id: number
  pictures: Picture[]
}

const ImageCard: FC<Props> = ({ id, pictures }) => {
  const [modal, setModal] = useState<boolean>(false)
  const [selectedPicture, setSelectedPicture] = useState<string | undefined>()

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

  useEffect(() => {
    const picture = pictures.find((p) => p.id === id)?.src
    if (picture) {
      setSelectedPicture(picture)
    }
  }, [id, pictures])

  return (
    <>
      <div className='imagecardContainer' onClick={toggleModal}>
        <img className='imageCardImage' src={selectedPicture}></img>
      </div>

      {modal && (
        <div>
          <div className='overlay'>
            <div className='modalContent' ref={modalRef}>
              <ImageSliderPopup id={id} pictures={pictures} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCard
