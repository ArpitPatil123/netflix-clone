import React, { useState } from "react";
import "../assets/Login.css";
import { loginBackground, logoLink } from "../data/data";
import SignIn from "./SignIn";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div
      className="login"
      style={{
        background: `url(${loginBackground}) center no-repeat`,
      }}
    >
      <div className="login_background">
        <img className="login__logo" src={logoLink} alt="" />
        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login__input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  autoComplete="true"
                />
                <button
                  className="login__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started &gt;
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
