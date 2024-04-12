import React, { FC, useEffect, useState } from "react"
import "./Aktivity.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getAktivityTranslated, getPicturesAktivity } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore-types"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

const Aktivity: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [aktivityPictures, setAktivityPictures] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const fetchedTranslation = await getAktivityTranslated()
      const fetchedPictures = await getPicturesAktivity()
      setAktivityPictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const link1 = () => {
    window.location.href = "https://www.visittabor.eu/co-delat-v-tabore"
  }

  const link2 = () => {
    window.location.href = "https://www.koupalistepohoda.cz"
  }

  const link3 = () => {
    window.location.href = "https://tenissezimak.cz"
  }

  const link4 = () => {
    window.location.href = "https://www.visittabor.eu/kalendar-akci"
  }

  const renderSkeletons = () => {
    return <div className='skeleton'></div>
  }

  return (
    <AnimatedWrapper>
      <div className='aktivityPage'>
        <div className='row'>
          <div className='aktivityColumn'>
            <div className='aktivityContent'>
              <h1>{translationData?.translated_output.title1[lg] || "Vylety"}</h1>
              <p>{translationData?.translated_output.text1[lg]}</p>
              <button onClick={link1} className='linkButton'>
                Navstivit stranku
              </button>
            </div>
          </div>
          <div className='aktivityColumn'>
            {isLoading ? (
              renderSkeletons()
            ) : (
              <img className='imageCardImage' onClick={link1} src={aktivityPictures[0]}></img>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='aktivityColumn'>
            {isLoading ? (
              renderSkeletons()
            ) : (
              <img className='imageCardImage' onClick={link2} src={aktivityPictures[1]}></img>
            )}
          </div>
          <div className='aktivityColumn'>
            <div className='aktivityContent'>
              <h1>{translationData?.translated_output.title2[lg] || "Koupani"}</h1>
              <p>{translationData?.translated_output.text2[lg]}</p>
              <button onClick={link2} className='linkButton'>
                Navstivit stranku
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='aktivityColumn'>
            <div className='aktivityContent'>
              <h1>{translationData?.translated_output.title3[lg] || "Tenis"}</h1>
              <p>{translationData?.translated_output.text3[lg]}</p>
              <button onClick={link3} className='linkButton'>
                Navstivit stranku
              </button>
            </div>
          </div>
          <div className='aktivityColumn'>
            {isLoading ? (
              renderSkeletons()
            ) : (
              <img className='imageCardImage' onClick={link3} src={aktivityPictures[2]}></img>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='aktivityColumn'>
            {isLoading ? (
              renderSkeletons()
            ) : (
              <img className='imageCardImage' onClick={link4} src={aktivityPictures[3]}></img>
            )}
          </div>
          <div className='aktivityColumn'>
            <div className='aktivityContent'>
              <h1>{translationData?.translated_output.title4[lg] || "Akce"}</h1>
              <p>{translationData?.translated_output.text4[lg]}</p>
              <button onClick={link4} className='linkButton'>
                Navstivit stranku
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  )
}

export default Aktivity
