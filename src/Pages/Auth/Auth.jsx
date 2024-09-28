import React, { useState, useContext } from "react";
import classes from "./auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actiontype";
import {ClipLoader} from "react-spinners"

// import Layout from '../../Components/Layout/Layout'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(email, password)
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const [{ user }, dispatch] = useContext(DataContext);
  // console.log(user);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/95/98/b4/9598b485d75c30986078655d68259c62.png"
          alt=""
        />
      </Link>
      {/* loginform */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signInBtn}
          >
            {loading.signIn ? <ClipLoader size={15} /> : "Sign In"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZON CLONE conditions of use and sale.
          Please see our Privacy Notice, Cookies Notice and Interest-Based Ads
          Notice.
        </p>
        {/* create accout button */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerBtn}
        >
          {loading.signUp ? (
            <ClipLoader size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ padding: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}
export default Auth;

// const authHandler =async(e) => {
//     e.preventDefault();
//     console.log(e.target.name);
//     if(e.target.name == "signIn") {
//       // firebase auth
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//         console.log(userInfo)
//         dispatch({
//           type:Type.SET_USER,
//           user:userInfo.user,
//         })
//         }).catch((err)=>{
//           console.log(err)
//         })

//     }else{
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userInfo) => {
//           // console.log(userInfo);
//           dispatch({
//           type:Type.SET_USER,
//           user:userInfo.user,
//         })

//         }) .catch((err) => {
//           console.log(err);
//     })
//   }
// }
