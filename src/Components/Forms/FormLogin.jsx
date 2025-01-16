import { useState } from "react";

const FormLogin = ({ titleForm }) => {
    const [formData,setFormData] = useState({
        username: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    const handleChange = (event) => {
        console.log(event);
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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

export default FormLogin;