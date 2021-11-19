import { useState } from "react";
import "./style.css";

const SignupPage = () => {
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log("userdata", userdata);
  const firebaseHandler = () => {};
  return (
    <div className="container-div">
      <form
        className="modal-content"
        onSubmit={(event) => firebaseHandler(event)}
      >
        <h1>Sign Up</h1>
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
            login
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupPage;
