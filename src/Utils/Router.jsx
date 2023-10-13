import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartCheck from "../pages/CartCheck";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartCheck />} />
        </Routes>
    );
}

export default Router;