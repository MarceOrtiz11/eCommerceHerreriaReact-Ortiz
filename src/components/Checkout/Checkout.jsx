import { useState, useContext } from "react"
import FormularioCheckOut from "./FormularioCheckOut"
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const{ cart, totalPrice}= useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        const order = {
            user: { ...dataForm },
            products: [...cart],
            total: totalPrice()
        }

    };

    return (
        <div>
            <FormularioCheckOut
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default Checkout
