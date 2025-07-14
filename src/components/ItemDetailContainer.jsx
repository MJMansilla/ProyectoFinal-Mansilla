import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getProduct } from "../firebase/db"
import ItemDetail from "./ItemDetail"


export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({});
    const { id } = useParams()

    useEffect(()=>{
          getProduct(id)
          .then(producto => setDetail(producto))
          .catch(error => console.error(error))
    }, [id])

  return (
    <div>
        <ItemDetail detail ={detail} />
    </div>
  )
}