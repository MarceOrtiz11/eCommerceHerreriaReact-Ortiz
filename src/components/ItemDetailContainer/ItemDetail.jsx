import ItemCount from "../ItemCount/ItemCount";
import "./itemDetailContainer.css";

const ItemDetail = ({ product }) => {

  const handleClick = (count) => {
    const productCart = { ...product, quantity: count, total: product.price * count }
    console.log(productCart);
  }

  return (
    <div className="item-detail">
      <div className="info-detail">
        <h1 className="title">{product.name}</h1>
        <p className="description">{product.fullDescription}</p>
        <p className="price">Precio: ${product.price}</p>
        <ItemCount handleClick={handleClick} stock={product.stock} />
      </div>
      <div className="image-detail">
        <img src={product.image} />
      </div>
    </div>
  );
};
export default ItemDetail;
