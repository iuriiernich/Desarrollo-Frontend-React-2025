import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState, reset } from "react";
import useForm from "../Hooks/useForm.js";
import { resetFormData } from "../../store/form/formSlice.js";



const Navigator = () => {
    const { username, email } = useSelector((state) => state.form.loginForm);
    const dispatch = useDispatch();
  
    const [showLogoutModal, setShowLogoutModal] = useState(false);
  
    // Usar el hook useForm con estado inicial vacío para el formulario
    const { resetForm } = useForm();
  
    const handleLogout = () => {
      dispatch(resetFormData());
      setShowLogoutModal(false);
      reset();
      resetForm();
    };
  
    const handleModalClose = () => {
      setShowLogoutModal(false); // Cerrar el modal sin hacer logout
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">LandingPage</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>

            {username && email ? (
                <span className="welcome-message">
                    Bienvenido {username} | {email}
                </span>
            ) : null}

            {/* Botón de logout para abrir el modal */}
            {username && email && (
                <button className="logout-button" onClick={() => setShowLogoutModal(true)}>
                    Logout
                </button>
            )}

            {/* Modal de confirmación de logout */}
            {showLogoutModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={handleModalClose}>X</button>
                        <p>¿Estás seguro que deseas salir?</p>
                        <button onClick={handleLogout}>Presionar para salir</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigator;