import React from "react";
import "./checkOut.css"

const FormularioCheckOut = ({ dataForm, handleChangeInput, handleSubmit }) => {
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={dataForm.name}
                onChange={handleChangeInput}
            />
            <label htmlFor="phone">Telefono:</label>
            <input
                type="number"
                id="phone"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeInput}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                id="email"
                value={dataForm.email}
                onChange={handleChangeInput}
            />

            <button type="submit">Enviar Orden</button>
            </form>
        </div>
    );
}

export default FormularioCheckOut;
