import React, { FC, useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import "./ImageCard.scss"
import ImageSlider from "../ImageSlider/ImageSlider"

type Props = {
  id: string
  src: string
  styling: string
}

const ImageCard: FC<Props> = ({ id, src, styling }) => {
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
      <div className='imagecard-container' onClick={toggleModal}>
        <img className='imageCardImage' src={src}></img>
      </div>

      {modal && (
        <div>
          <div className='overlay'>
            <div className='modal-content' ref={modalRef}>
              <ImageSlider images={[src]} styling={styling} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageCard

ImageCard.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
}
