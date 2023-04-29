import React, { FC } from "react"

const Onas: FC = () => {
  return (
    <div className='page'>
      <div className='header'>
        <div className='suicide'>
          <h1>Penzion Na Mýtě a restaurace s.r.o.</h1>
        </div>
        <p>
          Na Mýtě 123
          <br />
          391 01 Sezimovo Ústí 1<br />
          Tel.: 381 214 730 - Ubytování, rezervace a restaurace
          <br />
        </p>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.7068683466568!2d14.691893502868028!3d49.38061736407571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470cbd3c7b9e3ed3%3A0xf1e10289df974a6c!2sPenzion%20-%20Restaurace%20Na%20M%C3%BDt%C4%9B!5e0!3m2!1sen!2sdk!4v1680965326444!5m2!1sen!2sdk'
        width='600'
        height='450'
        style={{ border: "0" }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>{" "}
    </div>
  )
}

export default Onas
