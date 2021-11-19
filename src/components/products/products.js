import {
  getFirestore,
  collection,
  // query,
  // where,
  // getDocs,
  // collectionGroup,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DeleteImage from "../../assets/images/bin.png";
import "./style.css";

const SignupPage = () => {
  const db = getFirestore();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    // step 1
    // await getDocs(q).then((querySnapshot) => {
    //   querySnapshot?.forEach((items) => {
    //     setProducts([...products, items.data()]);
    //     console.log("respo", items.data());
    //   });
    // });

    // step2
    onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });
  }, [db]);

  const deleteProductHandler = (id) => {
    deleteDoc(doc(db, "products", id));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            navigate("/add-product");
          }}
          style={{ width: "fit-content" }}
        >
          Add Product
        </button>
      </div>
      <div className="main-div">
        {products?.map((single) => (
          <div class="card">
            <div className="action-buttons">
              <span
                onClick={() => deleteProductHandler(single?.id)}
                className="img-container"
              >
                <img src={DeleteImage} alt="" />
              </span>
            </div>
            <div class="container">
              <img
                src="https://st.depositphotos.com/2228340/2424/i/600/depositphotos_24240983-stock-photo-product-development.jpg"
                alt=""
              />
              <h4>
                <b>{single?.name}</b>
              </h4>
              <p>Price:$ {single?.price}</p>
              <p>Stock: {single?.totalStock}</p>
              <div
                className="buttonContainer"
                onClick={() => {
                  navigate(`/update-product/${single?.id}`);
                }}
              >
                <button type="submit" className="signupbtn">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default SignupPage;
