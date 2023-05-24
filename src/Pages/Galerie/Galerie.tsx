import { FC, useEffect, useState } from "react"
import {
  getGalerieTranslated,
  getPicturesHomePage,
  getPicturesSvatby,
  getPicturesUbytovani,
} from "../../firebaseApi"
import ImageCard from "../../Components/ImageCard/ImageCard"
import "./Galerie.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { DocumentData } from "firebase/firestore"

export interface Picture {
  id: number
  src: string
  folder: string
}

const Galerie: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getGalerieTranslated()
      setTranslationData(fetchedTranslation)
      console.log(fetchedTranslation)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const [pictures, setPictures] = useState<Picture[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedHomePagePictures = await getPicturesHomePage()
      const fetchedSvatbyPictures = await getPicturesSvatby()
      const fetchedUbytovaniPictures = await getPicturesUbytovani()

      const allPictures = [
        ...fetchedHomePagePictures.map((src) => ({ src, folder: "homePage" })),
        ...fetchedUbytovaniPictures.map((src) => ({ src, folder: "ubytovani" })),
        ...fetchedSvatbyPictures.map((src) => ({ src, folder: "svatby" })),
      ]

      const picturesWithId: Picture[] = allPictures.map((picture, index) => ({
        ...picture,
        id: index,
      }))

      setPictures(picturesWithId)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className='galerieHeader'>
        <h1>{translationData?.translated_output.Penzion[lg]}</h1>
      </div>
      <div className='galeryStructure'>
        {pictures
          .filter((picture) => picture.folder === "homePage")
          .map((picture, index) => (
            <ImageCard key={`homePage-${index}`} id={picture.id} pictures={pictures} />
          ))}
        <div className='galerieHeader'>
          <h1>{translationData?.translated_output.Ubytovani[lg]}</h1>
        </div>
        <div className='galeryStructure'>
          {pictures
            .filter((picture) => picture.folder === "ubytovani")
            .map((picture, index) => (
              <ImageCard key={`ubytovani-${index}`} id={picture.id} pictures={pictures} />
            ))}
        </div>
        <div className='galerieHeader'>
          <h1>{translationData?.translated_output.Svatby[lg]}</h1>
        </div>
        <div className='galeryStructure'>
          {pictures
            .filter((picture) => picture.folder === "svatby")
            .map((picture, index) => (
              <ImageCard key={`svatby-${index}`} id={picture.id} pictures={pictures} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Galerie
