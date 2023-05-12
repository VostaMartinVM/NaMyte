import React, { FC, useEffect, useState } from "react"
import {
  getPicturesDvouluzko,
  getPicturesHomePage,
  getPicturesJednoluzko,
  getPicturesSvatby,
  getPicturesTriluzko,
} from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import ImageCard from "../../Components/ImageCard/ImageCard"
import "./Galerie.scss"

const Galerie: FC = () => {
  const [homePagePictures, setHomePagePictures] = useState<string[]>()
  const [jednoluzkoPictures, setJednoluzkoPictures] = useState<string[]>()
  const [dvouluzkoPictures, setDvouluzkoPictures] = useState<string[]>()
  const [triluzkoPictures, setTriluzkoPictures] = useState<string[]>()
  const [svatbyPictures, setSvatbyPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedHomePagePictures = await getPicturesHomePage()
      const fetchedJednoluzkoPictures = await getPicturesJednoluzko()
      const fetchedDvouluzkoPictures = await getPicturesDvouluzko()
      const fetchedTriluzkoPictures = await getPicturesTriluzko()
      const fetchedSvatbyPictures = await getPicturesSvatby()

      setHomePagePictures(fetchedHomePagePictures)
      setJednoluzkoPictures(fetchedJednoluzkoPictures)
      setDvouluzkoPictures(fetchedDvouluzkoPictures)
      setTriluzkoPictures(fetchedTriluzkoPictures)
      setSvatbyPictures(fetchedSvatbyPictures)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className='galerieHeader'>
        <h1>Penzion</h1>
      </div>
      <div className='galeryStructure'>
        {homePagePictures &&
          homePagePictures.map((picture, index) => (
            <ImageCard
              key={`homePage-${index}`} // Provide a unique key for each card
              id={`${index}`} // Use the index as the ID (not recommended in production code)
              src={picture}
              styling='dpc idk'
            />
          ))}
      </div>
      <div className='galerieHeader'>
        <h1>Penzion</h1>
      </div>
      <div className='galeryStructure'>
        {jednoluzkoPictures &&
          jednoluzkoPictures.map((picture, index) => (
            <ImageCard
              key={`jednoluzko-${index}`}
              id={`${index}`}
              src={picture}
              styling='dpc idk'
            />
          ))}
      </div>
      <div className='galerieHeader'>
        <h1>Penzion</h1>
      </div>
      <div className='galeryStructure'>
        {dvouluzkoPictures &&
          dvouluzkoPictures.map((picture, index) => (
            <ImageCard key={`dvouluzko-${index}`} id={`${index}`} src={picture} styling='dpc idk' />
          ))}
      </div>
      <div className='galerieHeader'>
        <h1>Penzion</h1>
      </div>
      <div className='galeryStructure'>
        {triluzkoPictures &&
          triluzkoPictures.map((picture, index) => (
            <ImageCard key={`triluzko-${index}`} id={`${index}`} src={picture} styling='dpc idk' />
          ))}
      </div>
      <div className='galerieHeader'>
        <h1>Penzion</h1>
      </div>
      <div className='galeryStructure'>
        {svatbyPictures &&
          svatbyPictures.map((picture, index) => (
            <ImageCard key={`svatby-${index}`} id={`${index}`} src={picture} styling='dpc idk' />
          ))}
      </div>
    </div>
  )
}

export default Galerie
