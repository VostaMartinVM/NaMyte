import { FC } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import "./PdfViewer.scss"
import fratna from "./Game.pdf"

const PdfViewer: FC = () => {
  return (
    <div>
      <Document file={fratna}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default PdfViewer
