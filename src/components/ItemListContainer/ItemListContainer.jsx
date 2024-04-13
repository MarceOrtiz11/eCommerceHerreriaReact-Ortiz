import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import "./itemListContainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        if(idCategory){
          //filtrar los productos
          const newProducts = respuesta.filter((producto)=> producto.category === idCategory )
          setProducts(newProducts)
        }else{
          //devolver todos los productos
          setProducts(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Finalizo la promesa"));
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
