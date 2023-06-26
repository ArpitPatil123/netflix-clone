import React, { useRef } from "react";
import "../assets/SignIn.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        console.log(user);
        alert("Sign In Successful");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <div className="input__field">
          <input ref={emailRef} type="text" id="email" required />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="input__field">
          <input ref={passwordRef} type="password" id="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span>New to Netflix?</span>
          <span className="signin__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
