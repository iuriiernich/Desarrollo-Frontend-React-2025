import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "../../store/form/formSlice.js";
import { motion } from "motion/react";
import { titleCase } from "title-case";
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../Modals/ModalInfo.jsx";


// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
    const { module, password: storedPassword } = useSelector((state) => state.form.loginForm);
    const dispatch = useDispatch();

    const { formData, handleChange } = useForm({
        module: module,
        username: '',
        email: '',
        password: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const { module, username, email, password } = formData;
        if (!module || !username || !email || !password) {
            setModalMessage("Todos los campos son requeridos.");
            setModalType("error");
            setShowModal(true);
            return;
        }

        if (password === storedPassword) { // Usar el password del store para la validación
            // Despachar la acción para guardar en el store
            dispatch(setFormData({ module, username, email, password }));  // Usamos setFormData de formSlice.js para actualizar el store

            // Mostrar modal de éxito
            setModalMessage(`Bienvenido: ${titleCase(username)}`);
            setModalType("success");
        } else {
            // No guardar en el store, mostrar error
            setModalMessage("Username/Password incorrectos!!!");
            setModalType("error");
        }

        setShowModal(true);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message={modalMessage}
                onClose={onCloseModalInfo}
                type={modalType} // "success" o "error"
            />

            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={formData.module}
                                onChange={handleChange}
                                readOnly
                                required
                            />
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <label>
                            Password:
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="button-visibility"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default FormWithMotionAndHook;