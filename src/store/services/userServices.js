import {createAsyncThunk} from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../firebase.js";
import {ref, set} from "firebase/database";
import {setUser} from "../slices/userSlice.js";


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
