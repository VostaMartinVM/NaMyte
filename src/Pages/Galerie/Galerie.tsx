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
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

export interface Picture {
  id: number
  src: string
  folder: string
}

const Galerie: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [pictures, setPictures] = useState<Picture[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const fetchedHomePagePictures = await getPicturesHomePage()
      const fetchedSvatbyPictures = await getPicturesSvatby()
      const fetchedUbytovaniPictures = await getPicturesUbytovani()
      const fetchedTranslation = await getGalerieTranslated()
      const allPictures = [
        ...fetchedHomePagePictures.map((src) => ({ src, folder: "homePage" })),
        ...fetchedUbytovaniPictures.map((src) => ({ src, folder: "ubytovani" })),
        ...fetchedSvatbyPictures.map((src) => ({ src, folder: "svatby" })),
      ]

      const picturesWithId: Picture[] = allPictures.map((picture, index) => ({
        ...picture,
        id: index,
      }))
      setTranslationData(fetchedTranslation)
      setPictures(picturesWithId)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const renderSkeletons = () => {
    return [...Array(5)].map((_, index) => <div key={index} className='gallerySkeleton'></div>)
  }

  return (
    <AnimatedWrapper>
      <div className='galerieContainer'>
        <div className='galerieHeader'>
          <h1>{translationData?.translated_output.Penzion[lg] || "Penzion"}</h1>
        </div>
        <div className='galeryStructure'>
          {isLoading
            ? renderSkeletons()
            : pictures
                .filter((picture) => picture.folder === "homePage")
                .map((picture, index) => (
                  <ImageCard key={`homePage-${index}`} id={picture.id} pictures={pictures} />
                ))}
        </div>
        <div className='galerieHeader'>
          <h1>{translationData?.translated_output.Ubytovani[lg] || "Ubytování"}</h1>
        </div>
        <div className='galeryStructure'>
          {isLoading
            ? renderSkeletons()
            : pictures
                .filter((picture) => picture.folder === "ubytovani")
                .map((picture, index) => (
                  <ImageCard key={`ubytovani-${index}`} id={picture.id} pictures={pictures} />
                ))}
        </div>
        <div className='galerieHeader'>
          <h1>{translationData?.translated_output.Svatby[lg]}</h1>
        </div>
        <div className='galeryStructure'>
          {isLoading
            ? renderSkeletons()
            : pictures
                .filter((picture) => picture.folder === "svatby")
                .map((picture, index) => (
                  <ImageCard key={`svatby-${index}`} id={picture.id} pictures={pictures} />
                ))}
        </div>
      </div>
    </AnimatedWrapper>
  )
}

export default Galerie
