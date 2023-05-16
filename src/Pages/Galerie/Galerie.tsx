import { FC, useEffect, useState } from "react"
import {
  getPicturesDvouluzko,
  getPicturesHomePage,
  getPicturesJednoluzko,
  getPicturesSvatby,
  getPicturesTriluzko,
} from "../../firebaseApi"
import ImageCard from "../../Components/ImageCard/ImageCard"
import "./Galerie.scss"

export interface Picture {
  id: number
  src: string
  folder: string
}

const Galerie: FC = () => {
  const [pictures, setPictures] = useState<Picture[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedHomePagePictures = await getPicturesHomePage()
      const fetchedJednoluzkoPictures = await getPicturesJednoluzko()
      const fetchedDvouluzkoPictures = await getPicturesDvouluzko()
      const fetchedTriluzkoPictures = await getPicturesTriluzko()
      const fetchedSvatbyPictures = await getPicturesSvatby()

      const allPictures = [
        ...fetchedHomePagePictures.map((src) => ({ src, folder: "homePage" })),
        ...fetchedJednoluzkoPictures.map((src) => ({ src, folder: "jednoluzko" })),
        ...fetchedDvouluzkoPictures.map((src) => ({ src, folder: "dvouluzko" })),
        ...fetchedTriluzkoPictures.map((src) => ({ src, folder: "triluzko" })),
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
        <h1>Penzion</h1>
      </div>
      <div className='galeryStructure'>
        {pictures
          .filter((picture) => picture.folder === "homePage")
          .map((picture, index) => (
            <ImageCard key={`homePage-${index}`} id={picture.id} pictures={pictures} />
          ))}
        <div className='galerieHeader'>
          <h1>Jednoluzko</h1>
        </div>
        <div className='galeryStructure'>
          {pictures
            .filter((picture) => picture.folder === "jednoluzko")
            .map((picture, index) => (
              <ImageCard key={`jednoluzko-${index}`} id={picture.id} pictures={pictures} />
            ))}
        </div>
        <div className='galerieHeader'>
          <h1>Dvouluzko</h1>
        </div>
        <div className='galeryStructure'>
          {pictures
            .filter((picture) => picture.folder === "dvouluzko")
            .map((picture, index) => (
              <ImageCard key={`dvouluzko-${index}`} id={picture.id} pictures={pictures} />
            ))}
        </div>
        <div className='galerieHeader'>
          <h1>Triluzko</h1>
        </div>
        <div className='galeryStructure'>
          {pictures
            .filter((picture) => picture.folder === "triluzko")
            .map((picture, index) => (
              <ImageCard key={`triluzko-${index}`} id={picture.id} pictures={pictures} />
            ))}
        </div>
        <div className='galerieHeader'>
          <h1>Svatby</h1>
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
