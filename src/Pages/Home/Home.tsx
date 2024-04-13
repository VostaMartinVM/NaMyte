import { FC, useEffect, useState } from "react"
import { getHomePageTranslated, getPicturesHomePage } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import { RootState } from "../../Redux/store"
import { useSelector } from "react-redux"
import "./Home.scss"
import AnimatedWrapper from "../../Components/AnimatedWrapper/AnimatedWrapper"

const Home: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [homePagePictures, setHomePagePictures] = useState<string[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const fetchedTranslation = await getHomePageTranslated()
        const fetchedPictures = await getPicturesHomePage()
        setHomePagePictures(fetchedPictures)
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

  return (
    <AnimatedWrapper>
      <div className='homePage'>
        <div className='homeImgContainer'>
          <ImageSlider pictures={homePagePictures} styling='homeImageCard' />
        </div>
        <div>
          <div className='homeHeader'>
            <h1>{translationData ? translationData.translated_output.header[lg] : "Úvod"}</h1>
          </div>
          <div>
            <p>
              {translationData
                ? translationData?.translated_output.introduction[lg]
                : "Penzion a Restaurace Na Mýtě se nachází na okraji malého městečka Sezimovo Ústí, vzdáleného od Tábora pouhé 2km. Pokud se chystáte navštívit historické město Tábor na řece Lužnici, připomenout si jeho husitskou minulost a objevovat kouzlo jeho labyrintu uliček a malebných zákoutí, nebo jste se rozhodli navštívit Benešovu vilu či zříceninu gotického hradu Kozí Hrádek, nezapomeňte navštívit i náš rodinný penzion Na Mýtě. Nabízíme Vám ubytování v nadstandartně zařízených jedno, dvou a tří lůžkových pokojích s vlastním sociálním zařízením, LCD televizorem a internetovým připojením. Pokoje mají výhled do rozlehlé udržované zahrady s vlastním jezírkem. ----- Samozřejmostí našeho penzionu je také bezplatné uzamykatelné parkoviště a úschovna kol. Nezapomněli jsme ani na naše nejmenší a v blízkosti venkovní terasy, která je součástí restaurace, jsme vybudovali dětské hřiště s aktivitami pro nejmenší jako jsou houpačka, skluzavka a nebo pískoviště. Po příjemně stráveném dni procházkami po kulturních památkách nebo sportovních aktivitách, Vás rádi přivítáme v naší restauraci s venkovní terasou, kde Vám nabízíme příjemné posezení a relaxaci při výběru z bohaté nabídky Naší kuchyně a nebo jen tak při posezení u skleničky dobrého vína či sklenice českého piva. V roce 2010 se v Táboře konalo MS v cyklokrosu. V našem penzionu byl ubytován Zdeněk Štybar, mistr světa 2010, 2011 a celkový vítěz Světového poháru, nejprestižnější mužské kategorie ELITE."}
            </p>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  )
}

export default Home
