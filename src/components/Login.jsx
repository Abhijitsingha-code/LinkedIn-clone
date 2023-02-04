import React, { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const LoginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
      }))
    })
    .catch((error) => alert(error))
  };

  const SignToApp = (e) => {
    e.preventDefault();

    if (!name) alert("Please enter full name");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => console.log(error.message));
  };
  const register = () => {
    setLoginInfo(false);
  };

  return (
    <div className="login">
      <img
        src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/linkedin-512.png"
        alt=""
      />
      <form>
        {!loginInfo && (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              type="text"
            />
            <input
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              placeholder="Profile Picture (Optional)"
              type="text"
            />
          </>
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        {!loginInfo ? (
          <button type="submit" onClick={SignToApp}>
            Sigin
          </button>
        ) : (
          <button type="submit" onClick={LoginToApp}>
            Login
          </button>
        )}
      </form>

      <p>
        New to LinkedIn-Clone?
        <span className="login_register" onClick={register}>
          {" "}
          Create account
        </span>
      </p>
    </div>
  );
};

export default Login;
