import { getFirestore, collection, getDoc, doc } from "firebase/firestore"
import { db, storage } from "./firebase"
import { getDownloadURL, listAll, ref } from "firebase/storage"

// GET TRANSLATED DATA

export const getHomePage = async () => {
  const TranDataHomePage = await getDoc(doc(db, "translation_collection_path", "homePage")).then(
    (queryData) => {
      return queryData.data()
    },
  )
  return TranDataHomePage
}

export const getNabidkaJidelPageMenu = async () => {
  const TranDataHomePage = await getDoc(
    doc(db, "translation_collection_path", "nabidkaJidelPageMenu"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranDataHomePage
}
export const getNavbar = async () => {
  const TranDataHomePage = await getDoc(doc(db, "translation_collection_path", "navbar")).then(
    (queryData) => {
      return queryData.data()
    },
  )
  return TranDataHomePage
}
export const getUbytovaniPageMenu = async () => {
  const TranDataHomePage = await getDoc(
    doc(db, "translation_collection_path", "ubytovaniPageMenu"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranDataHomePage
}

export const getPicturesHomePage = async () => {
  const listRef = ref(storage, "HomePage")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}
