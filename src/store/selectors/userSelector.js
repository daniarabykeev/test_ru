import { createSelector } from "@reduxjs/toolkit";

const getUser = (state) => state.user.user;
export const getIsAuth = createSelector(getUser, (user) => user !== null);
export const getEmail = createSelector(getUser, (user) => {
  console.log(user);
  return user.userEmail;
});
