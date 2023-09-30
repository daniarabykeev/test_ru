import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebase.js";
import {ref, set, get, child } from "firebase/database";
import {setUser, setUsers} from "../slices/userSlice.js";
import axios from "axios";

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

export const fetchAuth = createAsyncThunk('fetchAuth', async(login, { dispatch}) => {
    const {email, password} = login;
    try {
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        const {email: userEmail, uid} = user
        dispatch(setUser({userEmail, id: uid}))
    }catch (e) {
        alert('пароль или логин неправильны')
    }
})

export const fetchSignUp = createAsyncThunk('fetchSignUP', async({ email, password }, thunApi)  => {
   const { extra } = thunApi;
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const { uid} = user;
        await set(ref(db, 'users/' + uid), { email });
        extra.navigate('login')
    } catch (e) {
        throw Error(e?.message)
    }
})

export const fetchAllUsers = createAsyncThunk('fetchAllusers', async(_, {dispatch}) => {
    const dbRef = ref(db)
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
          dispatch(setUsers(randomUsersData));
        }
      } catch (error) {
        console.log(error);
      }
});
