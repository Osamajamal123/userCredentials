import { useEffect, useState } from "react";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router";
import "./style.css";

const SignupPage = () => {
  const db = getFirestore();
  const params = useParams();
  const navigate = useNavigate();
  const [userdata, setUserData] = useState();
  useEffect(() => {
    onSnapshot(doc(db, "products", params?.id), (snapshot) => {
      setUserData(snapshot?.data());
    });
  }, []);
  const firebaseUpdateHandler = (e) => {
    e.preventDefault();
    setDoc(doc(db, "products", params?.id), userdata).then((response) => {
      navigate("/");
    });
  };
  return (
    <div className="container-div">
      <form
        className="modal-content"
        onSubmit={(event) => firebaseUpdateHandler(event)}
      >
        <h1 className="" style={{ textAlign: "center" }}>
          Update Product
        </h1>
        <label for="email">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter"
          name="text"
          value={userdata?.name}
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
          value={userdata?.price}
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
          value={userdata?.description}
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
          value={userdata?.totalStock}
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
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
