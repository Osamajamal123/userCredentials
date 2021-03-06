import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import "./style.css";

const SignupPage = () => {
  const auth = getAuth();
  const db = getFirestore();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const firebaseHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userdata?.email, userdata?.password)
      .then(async (res) => {
        // const user = res.user;
        await setDoc(doc(db, "users", res.user.uid), {
          name: userdata?.name,
          email: userdata?.email,
        });
      })
      .catch((error) => {
        // error
      });
  };
  return (
    <div className="container-div">
      <form
        className="modal-content"
        onSubmit={(event) => firebaseHandler(event)}
      >
        <h1>Sign Up</h1>
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
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(event) => {
            let duplicate = { ...userdata };
            duplicate.email = event.target.value;
            setUserData(duplicate);
          }}
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={(event) => {
            let duplicate = { ...userdata };
            duplicate.password = event.target.value;
            setUserData(duplicate);
          }}
          required
        />

        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>

        {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

        <div
          className="clearfix"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
