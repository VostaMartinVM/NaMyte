import { FC } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import "./PdfViewer.scss"

type PdfViewerProps = {
  url: string
}

const PdfViewer: FC<PdfViewerProps> = ({ url }) => {
  if (!url) return <div>Loading PDF...</div>

  return (
    <div className='pdfContainer'>
      <Document file={url}>
        {url && <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />}
      </Document>
    </div>
  )
}

export default PdfViewer
