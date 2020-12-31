import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userToken } from "../../../_actions/user_action";
import styles from "./Header.module.css";

import Logo from "./Sections/Logo";
import Home from "./Sections/Home";
import Scrap from "./Sections/Scrap";
import Searchbar from "./Sections/Searchbar";
import SignIn from "./Sections/SignIn";
import SignUp from "./Sections/SignUp";
import Logout from "./Sections/Logout";
import UserInfo from "./Sections/UserInfo";
import LoginModal from "./Sections/LoginModal/LoginModal";
import RegisterModal from "./Sections/RegisterModal/RegisterModal";
import UserInfoModal from "./Sections/UserInfoModal/UserInfoModal";
import EditUser from "./Sections/EditUser/EditUser";

export default function Header({ searchQuery }) {
  const dispatch = useDispatch();

  const [LoginCompleted, setLoginCompleted] = useState(false);
  const [Login, setLogin] = useState(false);
  const [Register, setRegister] = useState(false);
  const [UserInformation, setUserInformation] = useState(false);
  const [EditUserForm, setEditUserForm] = useState(false);

  const renderLoginModal = () => {
    Login ? setLogin(false) : setLogin(true);
  };

  const renderRegisterModal = () => {
    Register ? setRegister(false) : setRegister(true);
  };

  const renderUserInfoModal = () => {
    UserInformation ? setUserInformation(false) : setUserInformation(true);
  };

  const renderEditUserModal = () => {
    EditUserForm ? setEditUserForm(false) : setEditUserForm(true);
  };

  const changeHeaderButton = () => {
    LoginCompleted ? setLoginCompleted(false) : setLoginCompleted(true);
  };

  useEffect(() => {
    dispatch(userToken()).then((result) => {
      if (result.payload.success) {
        setLoginCompleted(true);
      } else {
        setLoginCompleted(false);
      }
    });
  }, []);

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.left_menu}>
        <Home />
        <Scrap />
      </div>
      <Searchbar searchQuery={searchQuery} />
      <div className={styles.right_menu}>
        {LoginCompleted ? (
          <Logout changeHeaderButton={changeHeaderButton} />
        ) : (
          <SignIn renderLoginModal={renderLoginModal} />
        )}
        {LoginCompleted ? (
          <UserInfo renderUserInfoModal={renderUserInfoModal} />
        ) : (
          <SignUp renderRegisterModal={renderRegisterModal} />
        )}
      </div>
      {Login && (
        <LoginModal
          renderLoginModal={renderLoginModal}
          renderRegisterModal={renderRegisterModal}
          changeHeaderButton={changeHeaderButton}
        />
      )}
      {Register && <RegisterModal renderRegisterModal={renderRegisterModal} />}
      {UserInformation && (
        <UserInfoModal
          renderUserInfoModal={renderUserInfoModal}
          renderEditUserModal={renderEditUserModal}
        />
      )}
      
      {/* <EditUser /> */}
      {EditUserForm && <EditUser renderEditUserModal={renderEditUserModal} />}
    </div>
  );
}
