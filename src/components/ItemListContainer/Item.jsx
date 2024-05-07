import {useState} from "react"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const [expandir, setExpandir] = useState(false);

  const handleMouseOver = () => {
    setExpandir(true)
  };

  const handleMouseLeave = () => {
    setExpandir(false)
  };

  const estiloCard = {
    transform: expandir ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  }

  return (
    <div key={product.id} style={estiloCard} className="card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <div className="image-box-card">
        <img className="image-card" src={product.image} alt={product.name} />
      </div>
      <div className="info-card">
        <h2 className="title-card">{product.name}</h2>
        <p className="description-card">{product.description}</p>
        <div className="box-button-item">
          <Link to={`/detail/${product.id}`} className="button-item">
            Ver +
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
