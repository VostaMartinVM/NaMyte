import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getPicturesDenniMenu, getPicturesVikendoveMenu } from "../../firebaseApi"
import "./DenniNabidka.scss"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"
import PdfViewer from "../../Components/PdfViewer/PdfViewer"

const DenniNabidka: FC = () => {
  const [pdfUrlsDM, setPdfUrlDM] = useState<string[]>([])
  const [pdfUrlsVM, setPdfUrlVM] = useState<string[]>([])

  useEffect(() => {
    const fetchPdfUrls = async () => {
      try {
        const urlDenniMenu = await getPicturesDenniMenu()
        const urlVikendoveMenu = await getPicturesVikendoveMenu()
        setPdfUrlDM(urlDenniMenu)
        setPdfUrlVM(urlVikendoveMenu)
      } catch (error) {
        console.error("Error fetching PDFs:", error)
      }
    }

    fetchPdfUrls()
  }, [])

  const { lg } = useSelector((state: RootState) => state.language)

  return (
    <AnimatedWrapper>
      <div className='denniNabidakContainer'>
        <div className='denniNabidkaHeader'>
          <h1>Denni menu</h1>
        </div>
        <div>
          <PdfViewer url={pdfUrlsDM[0]} />
        </div>
        <div className='denniNabidkaHeader'>
          <h1>Vikendove menu</h1>
        </div>
        <div>
          <PdfViewer url={pdfUrlsVM[0]} />
        </div>
      </div>
    </AnimatedWrapper>
  )
}

export default DenniNabidka
