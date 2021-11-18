import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup";
import Signin from "./components/signin/signin";
import Shoppingcard from "./components/shoppingcard/shoppingcard";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
};
export default Routing;
