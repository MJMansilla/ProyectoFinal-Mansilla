import { 
    getFirestore, 
    collection, 
    getDocs,
    query,
    where,
    doc, 
    getDoc,
    addDoc
  } from "firebase/firestore"
import {app} from "./config.js"

const db = getFirestore(app)

export const getProductos = async () => {
    const documentos = await getDocs(collection(db, "productos"))
    const productos = []

    documentos.forEach((doc) => {
    productos.push({...doc.data(), id: doc.id})
    })
    return productos
}

export const getProductsByCategory = async (categoria) => {
    const q = query(collection(db, "productos"), where("categoria", "==", categoria))
    const documentos = await getDocs(q)
    const productos = []

    documentos.forEach((doc) => {
      productos.push({...doc.data(), id: doc.id}) 
    })
    return productos
}

export const getProduct = async (id) => {
    const docRef = doc(db, "productos", id)
    const documento = await getDoc(docRef)
    
    if (documento.exists()) {
      return {...documento.data(), id: documento.id}
    } else {
      return null
    }
}


export const createOrder = async (orden) => {
  await addDoc(collection(db, "ordenes"), orden)
}