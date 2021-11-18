import { useState } from "react";
import "./style.css";

const Signinpage = () => {
  const [usercredentials, setUsercredentials] = useState({
    email: "",
    password: "",
  });
  console.log("usercredentials",usercredentials)
  const firebaseCredentials=()=>{

  }
  return (
    <div>
      <form className="modal-content" onSubmit={(event)=>firebaseCredentials(event)}>
        <h1>Sign In</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={(event) => {
          let  duplicate = { ...usercredentials };
            duplicate.email = event.target.value;
            setUsercredentials(duplicate);
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
           let duplicate = { ...usercredentials };
            duplicate.password = event.target.value;
            setUsercredentials(duplicate);
          }}
          required
        />

        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>

        {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

        <div className="clearfix">
          <button
            type="button"
            onclick="document.getElementById('id01').style.display='none'"
            className="cancelbtn"
          >
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signinpage;
