import { createSelector } from "@reduxjs/toolkit";

const getUser = (state) => state.user.user;
export const getIsAuth = createSelector(getUser, (user) => user !== null);
export const getEmail = createSelector(getUser, (user) => user.userEmail);
export const getAllUsers = (state) => state.user.users;