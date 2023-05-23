import React, { FC, useEffect, useState } from "react"
import { getPicturesJidelniListek } from "../../firebaseApi"
import PdfViewer from "../../Components/PdfViewer/PdfViewer"
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

const JidleniListek: FC = () => {
  const [jidelniListekPictures, setJidelniListekPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesJidelniListek()
      setJidelniListekPictures(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div className='jidelniListek'>
      <h1>Le jidelni listek</h1>
      <PdfViewer></PdfViewer>
    </div>
  )
}

export default JidleniListek
