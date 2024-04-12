import React, { FC, useEffect, useState } from "react"
import "./NabidkaJidel.scss"
import { getJidelniListekTranslated, getPicturesJidelniListek } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

type DataValue = {
  [key: string]: string
}

type TranslationValue = {
  [key: string]: string
}

type Picture = {
  name: string | undefined
  url: string | undefined
}

const NabidkaJidel: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [jidelniListekPictures, setJidelniListekPictures] = useState<Picture[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const fetchedTranslation = await getJidelniListekTranslated()
      const fetchedPictureUrls = await getPicturesJidelniListek()
      const fetchedPictures = fetchedPictureUrls.map((url) => {
        const decodedUrl = decodeURIComponent(url)
        const segments = decodedUrl.split("/")
        const lastSegment = segments.pop()
        const name = lastSegment ? lastSegment.split("?")[0] : undefined
        return { name, url }
      })
      setJidelniListekPictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
      setIsLoading(false)
      console.log(jidelniListekPictures)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const headerArray: [string, string, string][] = [
    ["header1", "Predkrm", "Předkrmy"],
    ["header2", "BezmasaJidla", "Bezmasá jídla"],
    ["header3", "Maso", "Maso"],
    ["header4", "KureciMaso", "Kuřecí maso"],
    ["header5", "Ryby", "Ryby"],
    ["header6", "NaseSpeciality", "Naše speciality"],
    ["header7", "Prilohy", "Přílohy"],
    ["header8", "Omacky", "Omáčky"],
    ["header9", "SalatyMoucniky", "Saláty a moučníky"],
  ]

  const renderSkeletons = () => {
    return [...Array(5)].map((_, index) => (
      <>
        <div key={index} className='nabidkaJidelHeader'>
          <h1>{headerArray[index]?.[2]}</h1>
        </div>
        {[...Array(5)].map((_, index) => (
          <div key={index} className='nabidkaJidelRow'>
            <div className='nabidkaJidelColumn'>
              <div className='skeletonText'></div>
              <div className='skeletonText'></div>
            </div>
            <div key={index} className='nabidkaJidelColumn'>
              <div className='skeletonImg'></div>
            </div>
          </div>
        ))}
      </>
    ))
  }

  const renderHeaderItems = () => {
    if (!translationData) return null

    return headerArray.map(([headerKey, headerValue]) => {
      const translationValue = translationData.translated_output[headerKey]

      return (
        <div key={headerKey}>
          <div className='nabidkaJidelHeader'>
            <h1>{(translationValue as TranslationValue)[lg]} </h1>
          </div>
          {renderMenuItems(headerValue)}
        </div>
      )
    })
  }

  const renderMenuItems = (headerValue: string) => {
    if (!translationData) return null

    return Object.entries(translationData.translated_output)
      .filter(([key]) => key.startsWith(headerValue))
      .map(([menuKey, menuValue]) => {
        const image = jidelniListekPictures.find((picture) => picture.name === "Predkrm1.jpg")
        return (
          <div key={menuKey} className='nabidkaJidelRow'>
            <div className='nabidkaJidelColumn'>
              <h2>{(menuValue as DataValue)[lg]}</h2>
            </div>
            <div className='nabidkaJidelColumn'>
              <img className='imageCardImage' src={image ? image.url : undefined}></img>
            </div>
          </div>
        )
      })
  }

  return (
    <AnimatedWrapper>
      <div className='nabidkaJidelPage'>{isLoading ? renderSkeletons() : renderHeaderItems()}</div>
    </AnimatedWrapper>
  )
}

export default NabidkaJidel
