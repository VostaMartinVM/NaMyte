import React, { FC } from "react"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"
import "./Home.scss"

const Home: FC = () => {
  const slides = [
    { url: "../images/image-1.jpg", title: "beach", id: 1 },
    { url: "../images/image-2.jpg", title: "boat", id: 2 },
    { url: "../images/image-3.jpg", title: "forest", id: 3 },
    { url: "../images/image-4.jpg", title: "city", id: 4 },
    { url: "../images/image-5.jpg", title: "italy", id: 5 },
  ]

  return (
    <div className='home'>
      <div className='containerStyles'>
        <ImageSlider images={slides} />
      </div>
      <div className='text-container'>
        <div className='header'>
          <h1>Úvod</h1>
        </div>
        <div className='text'>
          <p>
            Penzion a Restaurace Na Mýtě se nachází na okraji malého městečka Sezimovo Ústí,
            vzdáleného od Tábora pouhé 2km. Pokud se chystáte navštívit historické město Tábor na
            řece Lužnici, připomenout si jeho husitskou minulost a objevovat kouzlo jeho labyrintu
            uliček a malebných zákoutí, nebo jste se rozhodli navštívit Benešovu vilu či zříceninu
            gotického hradu Kozí Hrádek, nezapomeňte navštívit i náš rodinný penzion Na Mýtě.
            Nabízíme Vám ubytování v nadstandartně zařízených jedno, dvou a tří lůžkových pokojích s
            vlastním sociálním zařízením, LCD televizorem a internetovým připojením. Pokoje mají
            výhled do rozlehlé udržované zahrady s vlastním jezírkem. ----- Samozřejmostí našeho
            penzionu je také bezplatné uzamykatelné parkoviště a úschovna kol. Nezapomněli jsme ani
            na naše nejmenší a v blízkosti venkovní terasy, která je součástí restaurace, jsme
            vybudovali dětské hřiště s aktivitami pro nejmenší jako jsou houpačka, skluzavka a nebo
            pískoviště. Po příjemně stráveném dni procházkami po kulturních památkách nebo
            sportovních aktivitách, Vás rádi přivítáme v naší restauraci s venkovní terasou, kde Vám
            nabízíme příjemné posezení a relaxaci při výběru z bohaté nabídky Naší kuchyně a nebo
            jen tak při posezení u skleničky dobrého vína či sklenice českého piva. V roce 2010 se v
            Táboře konalo MS v cyklokrosu. V našem penzionu byl ubytován Zdeněk Štybar, mistr světa
            2010, 2011 a celkový vítěz Světového poháru, nejprestižnější mužské kategorie ELITE.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
