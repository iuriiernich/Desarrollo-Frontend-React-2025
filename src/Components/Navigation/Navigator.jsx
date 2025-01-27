import { Link } from "react-router";
import { useSelector } from "react-redux";

const Navigator = () => {
    const { username, email } = useSelector((state) => state.form.loginForm);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/products" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/landingpage" className="nav-link">LandingPage</Link>


            {username && email ? (
                <span className="welcome-message">
                    Bienvenido {username} | {email}
                </span>
            ) : null}
        </nav>
    );
};

export default Navigator;