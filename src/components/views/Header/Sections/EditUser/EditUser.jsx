import React from "react";
import { useDispatch } from "react-redux";
import styles from "./EditUser.module.css";
import logo from "../../../../../images/logo.png";
import { useForm } from "react-hook-form";
import { userSignIn } from "../../../../../_actions/user_action";

const LoginModal = ({ renderLoginModal, renderRegisterModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors, unregister } = useForm();

  const emailStyle = errors.email ? styles.errorInput : styles.input;
  const passwordStyle = errors.password ? styles.errorInput : styles.input;

  const onSubmit = (data, event) => {
    console.log(data);
    event.preventDefault();
    dispatch(userSignIn(data.email, data.password));
    //성공 후 renderLoginModal 발동
  };
  console.log(watch("email"));
  console.log(errors.password);

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={styles.back}
          onClick={() => {
            renderLoginModal();
          }}
        >
          돌아가기
        </div>
        <img src={logo} className={styles.logo} alt="logo" />
        <h2 className={styles.title}>User Profile</h2>
        <div className={styles.content}>
            <div className={styles.profile}>
                <div className={styles.img_box}>
                  <span>편집</span>
                  {/* <img src="https://2.gall-img.com/tdgall/files/attach/images/82/353/034/071/fce08d4e7c567da6b2c4659752aa31f0.jpg" width="150px"/> */}
                </div>
            </div>

            <div className={styles.userForm}>
                <input
                type="email"
                name="email"
                ref={register({
                    required: true,
                })}
                className={emailStyle}
                placeholder="email"
                />

                {errors.email && (
                <div className={styles.errorMessage}>Email is required</div>
                )}

                <input
                type="password"
                name="password"
                ref={register({ required: true, minLength: 10 })}
                className={passwordStyle}
                placeholder="password"
                />

                {errors?.password?.type === "required" && (
                <div className={styles.errorMessage}>Password is required</div>
                )}

                {errors?.password?.type === "minLength" && (
                <div className={styles.errorMessage}>
                    Password length is at least 10
                </div>
                )}
                <div className={styles.edit_btn_box}>
                <button
                    className={styles.edit_btn}
                    onClick={() => {
                    renderLoginModal();
                    renderRegisterModal();
                    return unregister(["email", "password"]);
                    }}
                >
                    수정완료
                </button>
                </div>
            </div> 
        </div>

      </form>
    </div>
  );
};

export default LoginModal;
