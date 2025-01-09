import Logo from '../Components/Logo.jsx'; 
import Body from '../Components/Body.jsx';
import Footer from '../Components/Footer.jsx';
import GitHub from '../Components/GitHub.jsx';


const Home = () => {
    return (
        <div>
            <Logo />
            <GitHub />
            <Body />  
            <Footer />  
        </div>
    );
};

export default Home;