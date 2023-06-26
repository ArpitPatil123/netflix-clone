import React, { useEffect, useState } from "react";
import "../assets/Nav.css";
import { logoLink, avatarLink } from "../data/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={logoLink} alt="" />
        </Link>
        <Link to="/profile">
          <img className="nav__avatar" src={avatarLink} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
