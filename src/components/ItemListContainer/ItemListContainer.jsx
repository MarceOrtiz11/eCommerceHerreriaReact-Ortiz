import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import "./itemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts
      .then((respuesta) => {
        if(idCategory){
          const newProducts = respuesta.filter((producto)=> producto.category === idCategory )
          setProducts(newProducts)
        }else{
          setProducts(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      {
        loading ? <div>Cargando productos...</div> : <ItemList products={products} />
      }
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
