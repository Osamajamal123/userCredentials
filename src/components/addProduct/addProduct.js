import { useState } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import "./style.css";

const SignupPage = () => {
  const db = getFirestore();
  const navigate = useNavigate();
  let uid = uuidv4();
  const [userdata, setUserData] = useState({
    name: "",
    price: "",
    description: "",
    totalStock: "",
  });
  const firebaseHandler = (e) => {
    e.preventDefault();
    setDoc(doc(db, "products", uid), {
      id: uid,
      name: userdata?.name,
      price: userdata?.price,
      description: userdata?.description,
      totalStock: userdata?.totalStock,
    }).then((response) => {
      navigate("/");
    });
  };
  return (
    <div className="container-div">
      <form
        className="modal-content"
        onSubmit={(event) => firebaseHandler(event)}
      >
        <h1 className="" style={{ textAlign: "center" }}>
          Add Product
        </h1>
        <label for="email">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter"
          name="text"
          onChange={(event) => {
            let duplicate = { ...userdata };
            duplicate.name = event.target.value;
            setUserData(duplicate);
          }}
          required
        />
        <label for="email">
          <b>Price</b>
        </label>
        <input
          type="text"
          placeholder="Enter Price"
          name="text"
          onChange={(event) => {
            let duplicate = { ...userdata };
            duplicate.price = event.target.value;
            setUserData(duplicate);
          }}
          required
        />

        <label for="psw">
          <b>Description</b>
        </label>
        <input
          type="text"
          placeholder="Enter"
          onChange={(event) => {
            let duplicate = { ...userdata };
            duplicate.description = event.target.value;
            setUserData(duplicate);
          }}
          required
        />
        <label for="psw">
          <b>Total Stock</b>
        </label>
        <input
          type="text"
          placeholder="Enter"
          onChange={(event) => {
            let duplicate = { ...userdata };
            duplicate.totalStock = event.target.value;
            setUserData(duplicate);
          }}
          required
        />
        <div
          className="clearfix"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" className="signupbtn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
