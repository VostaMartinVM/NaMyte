import { ChangeEvent, FC, useRef, useState } from "react"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"
import {
  uploadPdfDenniMenu,
  uploadPdfVikendoveMenu,
  deleteDenniMenu,
  deleteVikendoveMenu,
} from "../../firebaseApi"

import "./Admin.scss"

const Admin: FC = () => {
  const navigate = useNavigate()
  const inputDenniMenuFile = useRef<HTMLInputElement>(null)
  const inputVikendoveMenuFile = useRef<HTMLInputElement>(null)
  const [uploadedFileDM, setUploadedFileDM] = useState<File | null>(null)
  const [uploadedFileVM, setUploadedFileVM] = useState<File | null>(null)

  const onChangeDM = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      setUploadedFileDM(file)
    }
  }

  const onChangeVM = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      setUploadedFileVM(file)
    }
  }

  const uploadDM = () => {
    if (uploadedFileDM) {
      deleteDenniMenu()
      uploadPdfDenniMenu(uploadedFileDM)
      console.log(uploadedFileDM)
    }
  }

  const uploadVM = () => {
    if (uploadedFileVM) {
      deleteVikendoveMenu()
      uploadPdfVikendoveMenu(uploadedFileVM)
      console.log(uploadedFileVM)
    }
  }

  return (
    <div className='adminContainer'>
      <div className='adminHeader'>
        <h1>Denni menu</h1>
      </div>

      <div>
        <input
          type='file'
          className='inputButton'
          ref={inputDenniMenuFile}
          onChange={onChangeDM}
        ></input>
        <button className='uploadButton' onClick={uploadDM}>
          Upload
        </button>
      </div>
      <div className='adminHeader'>
        <h1>Vikendove menu</h1>
      </div>

      <div>
        <input
          type='file'
          className='inputButton'
          ref={inputVikendoveMenuFile}
          onChange={onChangeVM}
        ></input>
        <button className='uploadButton' onClick={uploadVM}>
          Upload
        </button>
      </div>
      <button
        className='uploadButton'
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
