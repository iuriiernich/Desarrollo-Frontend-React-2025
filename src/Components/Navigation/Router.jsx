import Home from '../../screens/Home.jsx';
import Products from '../../screens/Products.jsx';
import About from '../../screens/About.jsx';
import Think from '../../screens/Think.jsx';
import Counter from '../Counter/Counter.jsx';

import { Routes, Route } from "react-router";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />
        </Routes>

    );
};

export default Router;