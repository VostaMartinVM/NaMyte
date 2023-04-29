import React, { FC, useEffect, useState } from "react"
import { getPicturesDenniMenu } from "../../firebaseApi"

const DenniMenu: FC = () => {
  const [denniMenuPictures, setDenniMenuPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesDenniMenu()
      setDenniMenuPictures(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div className='denniMenu'>
      <h1> Le denni menu</h1>
    </div>
  )
}

export default DenniMenu
