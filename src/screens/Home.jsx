
import Body from '../Components/Home/Body.jsx';
import OpenLink from '../Components/Core/OpenLink.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";

import { useSelector } from "react-redux";

const Home = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <div>
            <span>Count value: {count}</span>
            <div>
                <OpenLink redirectURL={"https://vite.dev"} logoImage={viteLogo} altValue= "Vite"/>
                <OpenLink redirectURL={"https://react.dev"} logoImage={reactLogo} altValue= "React"/>
                <OpenLink redirectURL={"https://github.com/iuriiernich/Desarrollo-Frontend-React-2025"} logoImage={githubLogo} altValue= "GitHub"/>
            </div>
            <Body />  
            <Footer />  
        </div>
    );
};

export default Home;