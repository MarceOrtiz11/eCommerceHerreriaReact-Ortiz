import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="cartwidget">
      <PiShoppingCartSimple size={30} />
      <p>{ totalQuantity() }</p>
    </Link>
  );
};
export default CartWidget;
