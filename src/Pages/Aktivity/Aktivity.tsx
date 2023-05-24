import React, { FC, useEffect, useState } from "react"
import Card from "../../Components/Card/Card"
import { CardImage } from "../../Components/Card/CardImage"
import "./Aktivity.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getAktivityTranslated, getPicturesAktivity } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore-types"

const Aktivity: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [aktivityPictures, setAktivityPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getAktivityTranslated()
      const fetchedPictures = await getPicturesAktivity()
      setAktivityPictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
      console.log(fetchedTranslation)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const cards = [
    {
      imageUrl: {
        url: "https://wegotthiscovered.com/wp-content/uploads/2022/05/did-rem-die-re-zero-e1654097742301.jpg",
        title: "beach",
      },
      title: translationData?.translated_output.title1[lg],
      text: translationData?.translated_output.text1[lg],
      link: "https://www.visittabor.eu/co-delat-v-tabore",
    },

    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: translationData?.translated_output.title2[lg],
      text: translationData?.translated_output.text2[lg],
      link: "https://www.koupalistepohoda.cz",
    },

    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: translationData?.translated_output.title3[lg],
      text: translationData?.translated_output.text3[lg],
      link: "https://tenissezimak.cz",
    },

    {
      imageUrl: { url: "../images/image-1.jpg", title: "beach" },
      title: translationData?.translated_output.title4[lg],
      text: translationData?.translated_output.text4[lg],
      link: "https://www.visittabor.eu/kalendar-akci",
    },
  ]

  return (
    <div className='aktivityPage'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          text={card.text}
          link={card.link}
        />
      ))}
    </div>
  )
}

export default Aktivity
