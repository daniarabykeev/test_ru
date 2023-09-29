import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  const dbRef = ref(getDatabase());

  const fetchUsers = async () => {
    try {
      const res = await get(child(dbRef, "users/"));
      console.log(Object.entries(res.val()).map(([_, sec]) => sec.email));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
