import { useDispatch } from "react-redux";
import Form from "./Form";
import classes from "./Styles.module.scss";
import {useCallback} from "react";
import {fetchAuth} from "../store/services/userServices.js";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = useCallback ((email, password) => {
      dispatch(fetchAuth({ email, password }));
  }, [dispatch]);

  return (
    <div className={classes.login_main}>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  );
};

export default Login;
