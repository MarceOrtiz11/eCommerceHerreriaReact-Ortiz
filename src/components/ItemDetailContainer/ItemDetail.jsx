import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemDetailContainer.css";

const ItemDetail = ({ product }) => {

  const { cart, addToCart } = useContext(CartContext)

  console.log(cart)

  const handleAddToCart = (count) => {
    const productCart = { ...product, quantity: count, total: product.price * count }
    addToCart(productCart)
  }

  return (
    <div className="item-detail">
      <div className="info-detail">
        <h1 className="title">{product.name}</h1>
        <p className="description">{product.fullDescription}</p>
        <p className="price">Precio: ${product.price}</p>
        <ItemCount handleAdToCart={handleAddToCart} stock={product.stock} />
      </div>
      <div className="image-detail">
        <img src={product.image} />
      </div>
    </div>
  );
};
export default ItemDetail;
