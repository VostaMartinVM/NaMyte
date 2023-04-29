import React, { FC, useEffect, useState } from "react"
import { getPicturesVikendoveMenu } from "../../firebaseApi"

const VikendoveMenu: FC = () => {
  const [vikendoveMenuPictures, setVikendoveMenuPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesVikendoveMenu()
      setVikendoveMenuPictures(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div className='vikendoveMenu'>
      <h1> Le vikendove menu</h1>
    </div>
  )
}

export default VikendoveMenu
