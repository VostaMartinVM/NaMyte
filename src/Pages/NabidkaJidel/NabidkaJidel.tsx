import { FC, useEffect, useState } from "react"
import "./NabidkaJidel.scss"
import { getNabidkaJidelTranslated, getPicturesAktivity } from "../../firebaseApi"
import { DocumentData } from "firebase/firestore"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
const NabidkaJidel: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [aktivityPictures, setAktivityPictures] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTranslation = await getNabidkaJidelTranslated()
      const fetchedPictures = await getPicturesAktivity()
      setAktivityPictures(fetchedPictures)
      setTranslationData(fetchedTranslation)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  return (
    <div className='nabidkaJidel'>
      <div className='homeHeader'>
        <h1>Home</h1>
      </div>
      <div className='row'>
        <div className='column'>
          <div className='nabidkaJidelcontent'>
            <h1></h1>
            <p></p>
            <button className='linkButton'>Navstivit stranku</button>
          </div>
        </div>
        <div className='column'>
          <img className='imageCardImage' src={aktivityPictures[0]} alt='Img not found'></img>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <img className='imageCardImage' src={aktivityPictures[1]} alt='Img not found'></img>
        </div>
        <div className='column'>
          <div className='nabidkaJidelcontent'>
            <h1></h1>
            <p></p>
            <button className='linkButton'>Navstivit stranku</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <div className='nabidkaJidelcontent'>
            <h1></h1>
            <p></p>
            <button className='linkButton'>Navstivit stranku</button>
          </div>
        </div>
        <div className='column'>
          <img className='imageCardImage' src={aktivityPictures[2]} alt='Img not found'></img>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <img className='imageCardImage' src={aktivityPictures[3]} alt='Img not found'></img>
        </div>
        <div className='column'>
          <div className='nabidkaJidelcontent'>
            <h1></h1>
            <p></p>
            <button className='linkButton'>Navstivit stranku</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NabidkaJidel
