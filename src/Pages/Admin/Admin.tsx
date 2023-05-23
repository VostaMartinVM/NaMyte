import React, { ChangeEvent, FC, useRef, useState } from "react"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import { uploadPdf } from "../../firebaseApi"

const Admin: FC = () => {
  const navigate = useNavigate()
  const inputFile = useRef<HTMLInputElement>(null)
  const [uploadedFile, setUploadedFile] = useState<File>()

  const handlePdfSubmit = () => {
    inputFile.current?.click()
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      setUploadedFile(file)
    }
  }

  const upload = () => {
    if (uploadedFile) {
      uploadPdf(uploadedFile)
      console.log(uploadedFile)
    }
  }

  return (
    <div>
      <h1>Le Admin Page</h1>
      <input type='file' ref={inputFile} onChange={onChange} />
      <button onClick={handlePdfSubmit}>Open files</button>
      <button onClick={upload}>Upload</button>
      <button
        onClick={() => {
          auth.signOut()
          navigate("/Login")
        }}
      >
        SignOut
      </button>
    </div>
  )
}

export default Admin
