import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    

    const addToCart = (newProduct) => {
        setCart([...cart, newProduct])
    }

    const totalQuantity = () => cart.reduce((total, product) => total + product.quantity, 0)
    
    const clearCart = () => {
        setCart([])
    }




    return (
        <CartContext.Provider value={{ cart, addToCart, totalQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }