import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-navbar">
        <img
          className="icon-navbar"
          src="https://www.bronzen.com.ar/Content/images/logo.png"
        />
      </Link>

      <ul className="categories-navbar">
        <Link to="/category/aluminio" className="categorie-navbar">
          ALUMINIO
        </Link>
        <Link to="/category/puerta" className="categorie-navbar">
          PUERTA
        </Link>
        <Link to="/category/baño" className="categorie-navbar">
          BAÑO
        </Link>
        <Link to="/category/porton" className="categorie-navbar">
          PORTÓN
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
