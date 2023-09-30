import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import classes from "./HomePage.module.scss";
import axios from "axios";

const HomePage = () => {
  const dbRef = ref(getDatabase());
  const [show, setShow] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const showUsers = () => {
    setShow(!show);
  };

  const getRandomUserData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      const userData = response.data.results[0];
      return {
        name: `${userData.name.first} ${userData.name.last}`,
        email: userData.email,
        avatar: userData.picture.large,
      };
    } catch (error) {
      console.error("Error fetching random user data", error);
      return null;
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await get(child(dbRef, "users/"));
      const usersData = res.val();
      if (usersData) {
        const userList = Object.values(usersData).map((user) => user.email);
        const randomUsersData = await Promise.all(
          userList.map(async (email) => {
            const userData = await getRandomUserData();
            return { ...userData, email };
          })
        );
        setUsersData(randomUsersData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    setUsersData([]);
  }, []);

  return (
    <div>
      <Navbar />
      <button onClick={() => showUsers()}>
        {show ? "Скрыть пользователей" : "Показать пользователей"}
      </button>
      {show && (
        <div className={classes.home_page_users}>
          {usersData.map((user, index) => (
            <div key={index} className={classes.home_card}>
              <img
                className={classes.card_img}
                src={user.avatar}
                alt={`Avatar of ${user.name}`}
              />
              <p className={classes.card_name}>
                {user.name.length > 18
                  ? user.name.slice(0, 18) + "..."
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
