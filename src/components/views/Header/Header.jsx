import React, { useState } from "react";
import styles from "./Header.module.css";

import Logo from "./Sections/Logo";
import Home from "./Sections/Home";
import Scrap from "./Sections/Scrap";
import Searchbar from "../../utils/Searchbar";
import SignIn from "./Sections/SignIn";
import SignUp from "./Sections/SignUp";
import Logout from "./Sections/Logout";
import UserInfo from "./Sections/UserInfo";
import LoginModal from "./Sections/LoginModal/LoginModal";
import RegisterModal from "./Sections/RegisterModal/RegisterModal";
import UserInfoModal from "./Sections/UserInfoModal/UserInfoModal";
import EditUser from './Sections/EditUser/EditUser';


export default function Header() {
  const [LoginCompleted, setLoginCompleted] = useState(true);
  const [Login, setLogin] = useState(false);
  const [Register, setRegister] = useState(false);
  const [UserInformation, setUserInformation] = useState(false);

  const renderLoginModal = () => {
    Login ? setLogin(false) : setLogin(true);
  };

  const renderRegisterModal = () => {
    Register ? setRegister(false) : setRegister(true);
  };

  const renderUserInfoModal = () => {
    UserInformation ? setUserInformation(false) : setUserInformation(true);
  };

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.left_menu}>
        <Home />
        <Scrap />
      </div>
      <Searchbar />
      <div className={styles.right_menu}>
        {LoginCompleted ? (
          <Logout />
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
        />
      )}
      {Register && <RegisterModal renderRegisterModal={renderRegisterModal} />}
      {UserInformation && (
        <UserInfoModal renderUserInfoModal={renderUserInfoModal} />
      )}
      <EditUser />

    </div>
  );
}
