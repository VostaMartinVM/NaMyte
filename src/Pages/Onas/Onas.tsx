import React, { FC, useEffect, useState } from "react"
import "./Onas.scss"
import { DocumentData } from "@firebase/firestore-types"
import { getOnasTranslated } from "../../firebaseApi"
import { useSelector } from "react-redux"
import { RootState } from "../../Redux/store"

const Onas: FC = () => {
  const [translationData, setTranslationData] = useState<DocumentData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const fetchedTranslation = await getOnasTranslated()
      setTranslationData(fetchedTranslation)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const { lg } = useSelector((state: RootState) => {
    return state.language
  })

  return (
    <div className='oNasPage'>
      <div className='homeHeader'>
        {isLoading ? (
          <h1>{translationData?.translated_output.h1[lg]}</h1>
        ) : (
          <h1>Penzion Na Mýtě a restaurace s.r.o.</h1>
        )}
        <h1></h1>
      </div>
      <div className='row'>
        <div className='oNasColumn'>
          {isLoading ? (
            <div className='map'>
              <div className='mapSkeleton'></div>
            </div>
          ) : (
            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.7068683466568!2d14.691893502868028!3d49.38061736407571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470cbd3c7b9e3ed3%3A0xf1e10289df974a6c!2sPenzion%20-%20Restaurace%20Na%20M%C3%BDt%C4%9B!5e0!3m2!1sen!2sdk!4v1680965326444!5m2!1sen!2sdk'
                width='600'
                height='450'
                style={{ border: "0" }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          )}
        </div>
        <div className='oNasColumn'>
          {isLoading ? (
            <div>
              <div className='header'>
                <p>
                  Na Mýtě 123
                  <br />
                  391 01 Sezimovo Ústí 1
                  <br />
                  tel.:
                  <b>381 214 730</b>
                  - Ubytování, rezervace a restaurace
                  <br />
                  IČO: 05518385 <br />
                  Spisová značka firmy C 25376 vedená u krajského soudu v Českých Budějovicích
                  <br />
                  E-mailem:{" "}
                  <a href='mailto:penzion-namyte@seznam.cz'>
                    <b>penzion-namyte@seznam.cz</b>
                  </a>
                  <br />
                </p>
              </div>
              <div className='sneaky'>
                <p>
                  V případě, že se nedovoláte na pevnou linku
                  <br />
                  Auto:
                  <b>777 203 741</b> - Pavel Růžička (10-18)
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className='header'>
                <p>
                  Na Mýtě 123
                  <br />
                  391 01 Sezimovo Ústí 1
                  <br />
                  {translationData?.translated_output.p3[lg]}
                  <b>381 214 730</b>
                  {translationData?.translated_output.p4[lg]}
                  <br />
                  IČO: 05518385 <br />
                  {translationData?.translated_output.p5[lg]}
                  <br />
                  {translationData?.translated_output.p6[lg]}{" "}
                  <a href='mailto:penzion-namyte@seznam.cz'>
                    <b>penzion-namyte@seznam.cz</b>
                  </a>
                  <br />
                </p>
              </div>
              <div className='sneaky'>
                <p>
                  {translationData?.translated_output.p7[lg]}
                  <br />
                  {translationData?.translated_output.p8[lg]}
                  <b>777 203 741</b> - Pavel Růžička (10-18)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Onas
