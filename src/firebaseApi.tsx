import { getDoc, doc } from "firebase/firestore"
import { db, storage } from "./firebase"
import { getDownloadURL, listAll, ref } from "firebase/storage"

// GET Auth

// GET TRANSLATED DATA

export const getHomePageTranslated = async () => {
  const TranDataHomePage = await getDoc(doc(db, "translation_collection_path", "homePage")).then(
    (queryData) => {
      return queryData.data()
    },
  )
  return TranDataHomePage
}

export const getNabidkaJidelPageMenuTranslated = async () => {
  const TranDataHomePage = await getDoc(
    doc(db, "translation_collection_path", "nabidkaJidelPageMenu"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranDataHomePage
}
export const getNavbarTranslated = async () => {
  const TranDataHomePage = await getDoc(doc(db, "translation_collection_path", "navbar")).then(
    (queryData) => {
      return queryData.data()
    },
  )
  return TranDataHomePage
}
export const getUbytovaniPageMenuTranslated = async () => {
  const TranDataHomePage = await getDoc(
    doc(db, "translation_collection_path", "ubytovaniPageMenu"),
  ).then((queryData) => {
    return queryData.data()
  })
  return TranDataHomePage
}

// GET PICTURES

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

export const getPicturesLogo = async () => {
  const listRef = ref(storage, "Logo")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesDenniMenu = async () => {
  const listRef = ref(storage, "DenniMenu")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesVikendoveMenu = async () => {
  const listRef = ref(storage, "VikendoveMenu")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesJidelniListek = async () => {
  const listRef = ref(storage, "JidelniListek")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesJednoluzko = async () => {
  const listRef = ref(storage, "Jednoluzko")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesDvouluzko = async () => {
  const listRef = ref(storage, "Dvouluzko")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesTriluzko = async () => {
  const listRef = ref(storage, "Triluzko")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}

export const getPicturesSvatby = async () => {
  const listRef = ref(storage, "Svatby")
  const refs = await listAll(listRef).then((res) => {
    return res.items
  })
  const urls: string[] = []
  refs.forEach(async (ref) => {
    urls.push(await getDownloadURL(ref))
  })
  return urls
}
