import "./itemDetailContainer.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="info-detail">
        <h1 className="title">{product.name}</h1>
        <p className="description">{product.fullDescription}</p>
        <p className="price">Precio: ${product.price}</p>
      </div>
      <div className="image-detail">
        <img src={product.image} />
      </div>
    </div>
  );
};
export default ItemDetail;
