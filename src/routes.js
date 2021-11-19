import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Home from "./components/products/products";
import AddProduct from "./components/addProduct/addProduct";
import UpdateProduct from "./components/updateProduct/updateProduct";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default Routing;
