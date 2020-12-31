import User from "../service/user";
import axios from "axios";
import { USER_SIGNIN, USER_SIGNUP, USER_SIGNOUT, USER_TOKEN } from "./types";

const httpClient = axios.create({
  baseURL: "http://52.79.228.106:5000",
});

httpClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("Authorization");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const user = new User(httpClient);

export const userSignIn = async (userLoginInfo) => {
  const result = await user.userSignIn(userLoginInfo);

  return {
    type: USER_SIGNIN,
    payload: result,
  };
};

export const userSignUp = async (userRegisterInfo) => {
  const result = await user.userSignUp(userRegisterInfo);
  return {
    type: USER_SIGNUP,
    payload: result,
  };
};

export const userLogout = async () => {
  const result = await user.userLogout();

  return { type: USER_SIGNOUT, payload: result };
};

export const userToken = async () => {
  const result = await user.userToken();

  return { type: USER_TOKEN, payload: result };
};
