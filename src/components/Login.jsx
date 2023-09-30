import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "../store/slices/userSlice";
import classes from "./Styles.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        // dispatch(setUser({
        //     email: user.email,
        //     id: user.id,
        //     token: user.accessToken
        // }))
        navigate("/");
      })
      .catch(alert);
  };

  return (
    <div className={classes.login_main}>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  );
};

export default Login;
