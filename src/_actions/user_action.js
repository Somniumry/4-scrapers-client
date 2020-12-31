import User from "../service/user";
import axios from "axios";
import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  USER_TOKEN,
  USER_EDIT,
} from "./types";

const httpClient = axios.create({
  baseURL: "http://ec2-54-180-54-2.ap-northeast-2.compute.amazonaws.com:5000",
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
