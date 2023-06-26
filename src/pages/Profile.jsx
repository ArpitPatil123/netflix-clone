import React from "react";
import "../assets/Profile.css";
import Navbar from "../components/Navbar";
import { avatarLink } from "../data/data";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />

      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img src={avatarLink} alt="" />
          <div className="profile__details">
            <h2>{user.email}</h2>

            <div className="profile__plans">
              <h3>Plans</h3>

              <button
                onClick={() => signOut(auth)}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
