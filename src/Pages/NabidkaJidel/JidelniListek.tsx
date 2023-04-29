import React, { FC, useEffect, useState } from "react"
import { getPicturesJidelniListek } from "../../firebaseApi"

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
    </div>
  )
}

export default JidleniListek
