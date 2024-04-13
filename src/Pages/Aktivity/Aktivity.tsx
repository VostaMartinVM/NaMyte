import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { getAktivityTranslated, getPicturesAktivity } from "../../firebaseApi"
import { DocumentData } from "@firebase/firestore-types"
import "./Aktivity.scss"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

const Aktivity: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [aktivityPictures, setAktivityPictures] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const fetchedTranslation = await getAktivityTranslated()
        const fetchedPictures = await getPicturesAktivity()
        setAktivityPictures(fetchedPictures)
        setTranslationData(fetchedTranslation)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  const getLinkFunction = (index: number) => {
    switch (index) {
      case 0:
        return "https://www.visittabor.eu/co-delat-v-tabore"
      case 1:
        return "https://www.koupalistepohoda.cz"
      case 2:
        return "https://tenissezimak.cz"
      case 3:
        return "https://www.visittabor.eu/kalendar-akci"
      default:
        return "https://tenissezimak.cz"
    }
  }

  const renderSkeletons = () => {
    return <div className='skeleton'></div>
  }

  const renderImage = (index: number) => {
    if (isLoading || !aktivityPictures[index]) {
      return renderSkeletons()
    }
    return (
      <a href={getLinkFunction(index)} target='_blank' rel='noopener noreferrer'>
        <img src={aktivityPictures[index]} alt={`Aktivity ${index}`} />
      </a>
    )
  }

  const renderButton = (index: number) => {
    return (
      <a href={getLinkFunction(index)} target='_blank' rel='noopener noreferrer'>
        <button className='linkButton'>Navstivit stranku</button>
      </a>
    )
  }

  return (
    <AnimatedWrapper>
      <div className='aktivityPage'>
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className='row'>
            {index % 2 === 0 ? (
              <>
                <div className='aktivityColumn'>{renderImage(index)}</div>
                <div className='aktivityColumn'>
                  <div className='aktivityContent'>
                    <h1>
                      {translationData?.translated_output[`title${index + 1}`]?.[lg] ||
                        "Default Title"}
                    </h1>
                    <p>{translationData?.translated_output[`text${index + 1}`]?.[lg]}</p>
                    {renderButton(index)}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='aktivityColumn'>
                  <div className='aktivityContent'>
                    <h1>
                      {translationData?.translated_output[`title${index + 1}`]?.[lg] ||
                        "Default Title"}
                    </h1>
                    <p>{translationData?.translated_output[`text${index + 1}`]?.[lg]}</p>
                    {renderButton(index)}
                  </div>
                </div>
                <div className='aktivityColumn'>{renderImage(index)}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </AnimatedWrapper>
  )
}

export default Aktivity
