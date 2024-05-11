import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Banner from "./components/Banner/Banner";
import "./App.css";


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Banner />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Catálogo" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Catálogo" />}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
