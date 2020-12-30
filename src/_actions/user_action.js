import User from "../service/user";
import axios from "axios";
import { USER_SIGNIN, USER_SIGNUP, USER_SIGNOUT } from "./types";

const httpClient = axios.create({
  baseURL: "http://52.79.228.106",
});

const user = new User(httpClient);

export const userSignIn = (email, password) => {
  const result = user.userSignIn(email, password);

  return {
    type: USER_SIGNIN,
    payload: result,
  };
};

export const usersignup = (data) => ({
  type: USER_SIGNUP,
  data,
});

export const usersignout = (data) => ({
  type: USER_SIGNOUT,
  data,
});
