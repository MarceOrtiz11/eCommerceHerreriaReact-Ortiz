import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = () => {
    const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className="empty-cart">Ups! tu carrito esta vacío.. 🤔</div>
    }

    return (
        <div className="cart">
            <h2>Tu Carrito</h2>
            <div className="products-cart">
                {cart.map((product) => (
                    <div key={product.id} className="product-cart">
                        <img className="image-product-cart" src={product.image} />
                        <p className="info-product-cart">{product.name}</p>
                        <p className="info-product-cart">Cantidad: {product.quantity}</p>
                        <p className="info-product-cart">Precio Unidad: {product.price}</p>
                        <p className="info-product-cart">Total:{product.quantity * product.price}</p>
                        <button onClick={() => deleteProductById(product.id)}>Eliminar Producto</button>
                    </div>
                ))}
            </div>
            <div className="controls-cart">
                <h2>Total Compra: {totalPrice()}</h2>
                <Link to="/checkout" className="button-go-checkout">Finalizar Compra</Link>
                <button className="button-clear-cart" onClick={clearCart}>Vaciar Carrito</button>
            </div>
        </div>
    );
}

export default Cart
