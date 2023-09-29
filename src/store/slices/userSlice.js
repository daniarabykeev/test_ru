import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set } from "firebase/database";

const initialState = {
  email: "erwef",
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const db = getDatabase();
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      // const {email, id} = action.payload
      // set(ref(db, 'users/' + id), {
      //      name: "name",
      //      email,
      //      token
      // })
    },
    removeUser(state) {
      (state.email = null), (state.token = null), (state.id = null);
    },
  },
});

export const { setUser, removeUser } = userSlice;
export default userSlice.reducer;
