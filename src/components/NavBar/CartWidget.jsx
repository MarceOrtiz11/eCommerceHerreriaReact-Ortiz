import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)
  const quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
      <PiShoppingCartSimple size={30} />
      <p>{ quantity > 0 && quantity }</p>
    </Link>
  );
};
export default CartWidget;
