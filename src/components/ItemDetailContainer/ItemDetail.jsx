import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import  ItemCount  from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./itemDetailContainer.css";

const ItemDetail = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext)
  const [clickAdd, setClickAdd] = useState(false)

  const handleAddToCart = (count) => {
    const productCart = { ...product, quantity: count, total: product.price * count }
    addToCart(productCart)
    setClickAdd(true)
  }

  return (
    <div className="item-detail">
      <div className="info-detail">
        <h1 className="title">{product.name}</h1>
        <p className="description">{product.fullDescription}</p>
        <p className="price">Precio: ${product.price}</p>
        {
          clickAdd ? <Link to="/cart" >Ir Al Carrito</Link> : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock} />
        }
      </div>
      <div className="image-detail">
        <img src={product.image} />
      </div>
    </div>
  );
};
export default ItemDetail;
