import { useState, useEffect } from "react"
import getProducts from "../../data/getProducts"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { idProduct } = useParams()

  useEffect(()=>{
    getProducts
      .then((respuesta)=> {
        const newProduct = respuesta.find((product)=> product.id === idProduct )
        setProduct(newProduct)
      })
      .catch((error)=> console.log(error))
  }, [idProduct])

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer