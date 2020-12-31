import React, { useRef, useState } from "react";
import styles from "./EditUserModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userEdit, userToken } from "../../../../../_actions/user_action";
import logo from "../../../../../images/logo.png";
import userBaseImage from "../../../../../images/user_profile.svg";

const UserInfoModal = ({ renderUserInfoModal, renderEditUserModal }) => {
  const dispatch = useDispatch();

  let { email, name, profileIconURL } = useSelector((userState) => {
    return userState.userReducer.user.userInfo.data;
  });

  profileIconURL = profileIconURL ? profileIconURL : userBaseImage;
  const {
    register,
    handleSubmit,
    watch,
    errors,
    unregister,
    getValues,
  } = useForm({ defaultValues: { name: name } });

  const nickNameStyle = errors.name ? styles.errorInput : styles.input;
  const passwordStyle = errors.password ? styles.errorInput : styles.input;
  const rePasswordStyle = errors.repassword ? styles.errorInput : styles.input;

  const Password = getValues("password");
  const Repassword = watch("repassword");

  const onSubmit = async (editData, event) => {
    event.preventDefault();

    const Imgfile = ImageUpload.file;
    const result = await dispatch(userEdit(editData, Imgfile));

    const getInfo = await dispatch(userToken(editData));

    if (result.payload.success) {
      renderEditUserModal();
      renderUserInfoModal();
    } else {
      alert("변경하고 싶은 정보를 입력해주세요.");
    }
  };

  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const [ImageUpload, setImageUpload] = useState({
    file: "",
    previewURL: "",
  });

  const onChangeImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      setImageUpload({
        file: file,
        previewURL: reader.result,
      });
    };
    file && reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <form className={styles.editUser} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={styles.back}
          onClick={() => {
            renderEditUserModal();
          }}
        >
          돌아가기
        </div>
        <img src={logo} className={styles.logo} alt="logo" />
        <h2 className={styles.title}>User Profile</h2>
        <div className={styles.content}>
          <div>
            <img
              className={styles.userImage}
              src={
                ImageUpload.previewURL ? ImageUpload.previewURL : profileIconURL
              }
            ></img>
            <input
              ref={inputRef}
              className={styles.imageInput}
              type="file"
              accept="image/*"
              name="img"
              onChange={onChangeImage}
            />
            <div onClick={onButtonClick}>변경</div>
          </div>

          <div className={styles.userInfo}>
            <div className={styles.userInfo__text}>{email}</div>
            <input
              type="text"
              name="name"
              ref={register}
              className={nickNameStyle}
              placeholder="nickname"
            />
            {errors.name && (
              <div className={styles.errorMessage}>Nickname is required</div>
            )}
            <input
              type="password"
              name="password"
              ref={register({
                minLength: 10,
                validate: () => {
                  return Repassword === Password;
                },
              })}
              className={passwordStyle}
              placeholder="password"
            />
            {errors.password?.type === "required" && (
              <div className={styles.errorMessage}>Password is required</div>
            )}
            {errors.password?.type === "minLength" && (
              <div className={styles.errorMessage}>
                Password length is at least 10
              </div>
            )}
            <input
              type="password"
              name="repassword"
              ref={register({
                minLength: 10,
                validate: () => {
                  return Repassword === Password;
                },
              })}
              className={rePasswordStyle}
              placeholder="confirm password"
            />
            {errors.repassword?.type === "required" && (
              <div className={styles.errorMessage}>Password is required</div>
            )}
            {errors.repassword?.type === "minLength" && (
              <div className={styles.errorMessage}>
                Password length is at least 10
              </div>
            )}
            {errors.repassword?.type === "validate" && (
              <div className={styles.errorMessage}>
                Please make sure your passwords match
              </div>
            )}

            <div className={styles.edit_btn_box}>
              <button className={styles.edit_btn}>수정완료</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInfoModal;
