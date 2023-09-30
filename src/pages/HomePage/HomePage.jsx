import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import classes from "./HomePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/selectors/userSelector";
import { fetchAllUsers } from "../../store/services/userServices";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const users = useSelector(getAllUsers);
  const showUsers = () => {
    setShow(!show);
  };
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <button onClick={() => showUsers()}>
        {show ? "Скрыть пользователей" : "Показать пользователей"}
      </button>
      {show && (
        <div className={classes.home_page_users}>
          {users.map((user, index) => (
            <div key={index} className={classes.home_card}>
              <img
                className={classes.card_img}
                src={user.avatar}
                alt={`Avatar of ${user.name}`}
              />
              <p className={classes.card_name}>
                {user.name.length > 20
                  ? user.name.slice(0, 20) + "..."
                  : user.name}
              </p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
