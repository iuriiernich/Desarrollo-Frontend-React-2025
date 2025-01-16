import useForm from '../Hooks/useForm.js';
import { useState } from "react";

const FormLoginWithHook = ({ titleForm }) => {
    const { formData,handleChange } = useForm({
        username: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{titleForm}</h3>
            <div>
                <label>
                    Username:
                    <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormLoginWithHook;