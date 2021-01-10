import User from "../service/user";
import axios from "axios";
import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  USER_TOKEN,
  USER_EDIT,
  USER_DELETE,
  USER_GOOGLE,
} from "./types";

const httpClient = axios.create({
  withCredentials : true,
  baseURL: "https://scraper.ga:8080",
  responseType: 'json',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
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

export const userEdit = async (userEditInfo, imgUrl) => {
  const result = await user.userEdit(userEditInfo, imgUrl);
  return { type: USER_EDIT, payload: result };
};

export const userDelete = async (password) => {
  const result = await user.userDelete(password);
  return { type: USER_DELETE, payload: result };
};

export const userGoogleLogin = async () => {
  const result = await user.userGoogleLogin();
  return { type: USER_GOOGLE, payload: result };
};
