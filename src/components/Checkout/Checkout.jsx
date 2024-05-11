import { useState, useContext } from "react"
import FormularioCheckOut from "./FormularioCheckOut"
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    });
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const order = {
            user: { ...dataForm },
            products: [...cart],
            total: totalPrice()
        };
        const response = await validateForm(dataForm)
        if (response.status === "success") {
            uploadOrder(order);
        } else {
            toast(response.error);
        }
    };

    const uploadOrder = async (order) => {
        const ordersRef = collection(db, "orders");
        const response = await addDoc(ordersRef, order);

        setIdOrder(response.id);
        clearCart()
    }

    return (
        <div className="div-checkout">
            {idOrder ? (
            <div>
                <h2 className="thank-you">Gracias por su compra! 🚀 </h2>
                <div className="track-number">
                    <p>Numero de seguimiento: 👇 </p>
                    {idOrder}
                </div>
                <div>
                    <Link className="link-checkout" to="/">Volver al inicio</Link>
                </div>
            </div>
            ) : (
            <FormularioCheckOut
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
            />
            )}
        </div>
    );
};

export default Checkout
