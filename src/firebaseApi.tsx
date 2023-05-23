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

export const getNabidkaJidelTranslated = async () => {
  const TranslatedNabidkaJidel = await getDoc(
    doc(db, "translation_collection_path", "nabidkaJidelPageMenu"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranslatedNabidkaJidel
}
export const getNavbarTranslated = async () => {
  const TranDataNavbar = await getDoc(doc(db, "translation_collection_path", "navbar")).then(
    (queryData) => {
      return queryData.data()
    },
  )
  return TranDataNavbar
}
export const getUbytovaniPageMenuTranslated = async () => {
  const TranDataUbytovaniPageMenu = await getDoc(
    doc(db, "translation_collection_path", "ubytovani"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranDataUbytovaniPageMenu
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

export const getPicturesJednoluzko = async () => {
  const listRef = ref(storage, "Jednoluzko/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesDvouluzko = async () => {
  const listRef = ref(storage, "Dvouluzko/")
  const refs = await listAll(listRef)

  const urlPromises = refs.items.map((imageRef) => getDownloadURL(imageRef))
  return Promise.all(urlPromises)
}

export const getPicturesTriluzko = async () => {
  const listRef = ref(storage, "Triluzko/")
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

// Upload pdf

export const uploadPdf = (pdf: File) => {
  const pdfRef = ref(storage, `JidelniListek/${pdf.name}`)
  uploadBytesResumable(pdfRef, pdf)
}
