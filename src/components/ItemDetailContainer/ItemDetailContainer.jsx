import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import db from "../../db/db"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams()
  const getProduct = async () => {
    const docRef = doc(db, "products", idProduct)
    const dataDb = await getDoc(docRef)
    const data = { id: dataDb.id, ...dataDb.data() }
    setProduct(data)
  }

  useEffect(()=>{
    getProduct()
  }, [idProduct])

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer