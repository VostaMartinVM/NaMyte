import { FC, useEffect, useState } from "react"
import { getPicturesUbytovani, getUbytovaniPageMenuTranslated } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import { DocumentData } from "firebase/firestore"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { TbBrandBooking } from "react-icons/tb"
import "./Ubytovani.scss"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

const Ubytovani: FC = () => {
  const [ubytovaniPictures, setUbytovaniPictures] = useState<string[]>()
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const fetchedPictures = await getPicturesUbytovani()
        const translatedUbytovani = await getUbytovaniPageMenuTranslated()
        setUbytovaniPictures(fetchedPictures)
        setTranslationData(translatedUbytovani)
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

  return (
    <AnimatedWrapper>
      <div className='ubytovaniContainer'>
        <div className='ubytovaniImgContainer'>
          <ImageSlider pictures={ubytovaniPictures} styling='roomImageSlider'></ImageSlider>
        </div>
        <div className='ubytovaniHeader'>
          <h1>{translationData ? translationData?.translated_output.header1[lg] : "Ubytování"}</h1>
        </div>
        {isLoading ? (
          <div>
            <p>
              Nabízíme ubytování v pokojích po jednom, dvou a tří lůžkách
              <br />
              Cena za jednu noc se snídaní včetně parkování:
              <i>890 ,-Kč</i>
              <br />
              Každý pokoj je vybaven vlastním sociálním zařízením a LCD televizorem
              <br />
              V celé budově je dostupný internet
              <br />
              Soukromé parkoviště se na noc uzamyká
              <br />
              Nabízíme i možnost přistýlky <br />
            </p>
          </div>
        ) : (
          <div>
            <p>
              {translationData?.translated_output.info1[lg]}
              <br />
              {translationData?.translated_output.info2[lg]}
              <i>890 ,-Kč</i>
              <br />
              {translationData?.translated_output.info3[lg]}
              <br />
              {translationData?.translated_output.info4[lg]}
              <br />
              {translationData?.translated_output.info5[lg]}
              <br />
              {translationData?.translated_output.info6[lg]}
              <br />
            </p>
          </div>
        )}

        <div className='booking'>
          <a href='https://www.booking.com/Share-V7jHm6B' target='_blank' rel='noopener noreferrer'>
            <TbBrandBooking className='icon' />
          </a>
        </div>
      </div>
    </AnimatedWrapper>
  )
}

export default Ubytovani
