import { useDispatch, useSelector } from "react-redux";
import classes from "./Styles.module.scss";
import { removeUser } from "../store/slices/userSlice";
import { getEmail } from "../store/selectors/userSelector";
import Logout from "../assets/logout.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const email = useSelector(getEmail).split("@");
  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("user");
  };
  return (
    <div>
      <div className={classes.navbar_main}>
        <h3>Welcome, {email[0]}</h3>
        <button onClick={() => logout()}>
          <img src={Logout} alt="" className={classes.navbar_img} />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
