import React, { FC, useEffect, useState } from "react"
import { getPicturesHomePage } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import ImageCard from "../../Components/ImageCard/ImageCard"

// export type Image = {
//   id: string
//   src: string
//   alt: string
//   styling: string
// }

// type Props = {
//   images: Image[]
// }

const Galerie: FC = () => {
  const [homePagePictures, setHomePagePictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesHomePage()
      setHomePagePictures(fetchedPictures)
    }

    fetchData()
  }, [])

  return (
    <div>
      <ImageCard
        id='1'
        src={homePagePictures?.[0] ?? "sracka toto ? "}
        styling='dpc idk'
      ></ImageCard>
    </div>
  )
}

export default Galerie
