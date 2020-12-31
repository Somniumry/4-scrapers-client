import React from "react";
import styles from "./UserInfoModal.module.css";
import { useSelector } from "react-redux";
import logo from "../../../../../images/logo.png";
import userBaseImage from "../../../../../images/user_profile.svg";

const UserInfoModal = ({ renderUserInfoModal, renderEditUserModal }) => {
  let { email, name, profileIconURL } = useSelector((userState) => {
    return userState.userReducer.user.userInfo.data;
  });

  profileIconURL = profileIconURL ? profileIconURL : userBaseImage;

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.user}>
        <div
          className={styles.back}
          onClick={() => {
            renderUserInfoModal();
          }}
        >
          돌아가기
        </div>
        <img src={logo} className={styles.logo} alt="logo" />
        <h2 className={styles.title}>User Profile</h2>
        <div className={styles.content}>
          <img
            src={profileIconURL}
            className={styles.userImage}
            alt="userImage"
          />

          <div className={styles.userInfo}>
            <div className={styles.userInfo__title}>이메일</div>
            <div className={styles.userInfo__text}>{email}</div>
            <div className={styles.userInfo__title}>닉네임</div>
            <div className={styles.userInfo__text}>{name}</div>

            <div className={styles.edit_btn_box}>
              <button
                className={styles.edit_btn}
                onClick={() => {
                  renderUserInfoModal();
                  renderEditUserModal();
                }}
              >
                수정하기
              </button>
              <button className={styles.edit_btn}>계정 삭제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
