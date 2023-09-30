import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { fetchSignUp } from "../store/services/userServices.js";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = useCallback(async(email, password) => {
      try {
          await dispatch(fetchSignUp({email, password}));
          navigate("/login");
      } catch (e) {
          console.log(e)
      }
  }, [dispatch])

  return (
      <Form title="register" handleClick={handleRegister} />
  );
};

export default SignUp;
