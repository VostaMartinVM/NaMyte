import React, { FC, useEffect, useState } from "react"
import "./Ubytovani.scss"
import { getPicturesJednoluzko } from "../../firebaseApi"
import ImageSlider from "../../Components/ImageSlider/ImageSlider"

const Ubytovani: FC = () => {
  const [jednoluzkoPictures, setJednoluzkoPictures] = useState<string[]>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPictures = await getPicturesJednoluzko()
      setJednoluzkoPictures(fetchedPictures)
    }
    fetchData()
  }, [])

  return (
    <div className='rooms'>
      <div className='containerStyles'>
        <ImageSlider pictures={jednoluzkoPictures} styling='roomImageSlider'></ImageSlider>
      </div>
      <div>
        <h1></h1>
        <p>
          Nabízíme ubytování v pokojích po jednom, dvou a tří lůžkách <br />
          Každý pokoj je vybaven vlastním sociálním zařízením a LCD televizorem <br />
          V nabídce máme i možnost přistýlky <br />
          V celé budově je dostupný internet <br />
          V ceně je snídaně i parkování na soukromém parkovišti, které se na noc uzamyká <br />
        </p>
      </div>
    </div>
  )
}

export default Ubytovani
