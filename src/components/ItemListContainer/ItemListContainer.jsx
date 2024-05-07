import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import "./itemListContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams()

  const getProducts = async () => {
    const dataDb = await getDocs(collection(db, "products"));
    
    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() }
    })

    setProducts(data)
  }

  const getProductsByCategory = async() => {
    const q = query(collection(db, "products"), where("category", "==", idCategory))

    const dataDb = await getDocs(q);

    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    });

    setProducts(data);
  }

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory()
    } else {
      getProducts()
    }
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
