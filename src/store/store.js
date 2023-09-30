import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },

});

export const createStore = (navigate) => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
     thunk: { extraArgument: {navigate} }
    })
  })
}
