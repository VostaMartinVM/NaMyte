import { getDoc, doc } from "firebase/firestore"
import { db, storage } from "./firebase"
import { getDownloadURL, listAll, ref, uploadBytesResumable } from "firebase/storage"

// GET TRANSLATED DATA

export const getHomePageTranslated = async () => {
  const TranDataHomePage = await getDoc(doc(db, "translation_collection_path", "homePage")).then(
    (queryData) => {
      return queryData.data()
    },
  )
  return TranDataHomePage
}

export const getJidelniListekTranslated = async () => {
  let TranslatedNabidkaJidel
  ;(await db.collection("translation_collection_path").get()).forEach((doc) => {
    if (doc.id === "jidelniListek") {
      TranslatedNabidkaJidel = doc.data()
    }
  })

  return TranslatedNabidkaJidel
}

export const getNavbarTranslated = async () => {
  let TranslatedNavbar = undefined
  ;(await db.collection("translation_collection_path").get()).forEach((doc) => {
    if (doc.id === "navbar") {
      TranslatedNavbar = doc.data()
    }
  })
  return TranslatedNavbar
}
export const getUbytovaniPageMenuTranslated = async () => {
  const TranDataUbytovaniPageMenu = await getDoc(
    doc(db, "translation_collection_path", "ubytovani"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranDataUbytovaniPageMenu
}

export const getGalerieTranslated = async () => {
  let TranslatedGalerie = undefined
  ;(await db.collection("translation_collection_path").get()).forEach((doc) => {
    if (doc.id === "galerie") {
      TranslatedGalerie = doc.data()
    }
  })
  return TranslatedGalerie
}

export const getAktivityTranslated = async () => {
  let TranslatedOnas = undefined
  ;(await db.collection("translation_collection_path").get()).forEach((doc) => {
    if (doc.id === "aktivity") {
      TranslatedOnas = doc.data()
    }
  })
  return TranslatedOnas
}

export const getOnasTranslated = async () => {
  let TranslatedOnas = undefined
  ;(await db.collection("translation_collection_path").get()).forEach((doc) => {
    if (doc.id === "oNas") {
      TranslatedOnas = doc.data()
    }
  })
  return TranslatedOnas
}

// GET PICTURES

export const getPicturesHomePage = async () => {
  const listRef = ref(storage, "HomePage/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesLogo = async () => {
  const listRef = ref(storage, "Logo/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesDenniMenu = async () => {
  const listRef = ref(storage, "DenniMenu/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesVikendoveMenu = async () => {
  const listRef = ref(storage, "VikendoveMenu/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesJidelniListek = async () => {
  const listRef = ref(storage, "JidelniListek/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesUbytovani = async () => {
  const listRef = ref(storage, "Ubytovani/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesSvatby = async () => {
  const listRef = ref(storage, "Svatby/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesAktivity = async () => {
  const listRef = ref(storage, "Aktivity/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

// Upload pdf

export const uploadPdf = (pdf: File) => {
  const pdfRef = ref(storage, `JidelniListek/${pdf.name}`)
  uploadBytesResumable(pdfRef, pdf)
}
