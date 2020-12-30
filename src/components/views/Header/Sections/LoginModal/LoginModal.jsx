import React from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginModal.module.css";
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
        <img src={logo} className={styles.login__logo} alt="logo" />
        <h2 className={styles.login__title}>Welcome to Scraper</h2>
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
        <div className={styles.login__btn}>
          <input
            className={styles.login__btnLogin}
            type="submit"
            value="로그인"
          />
          <button
            className={styles.login__btnLogin}
            onClick={() => {
              renderLoginModal();
              renderRegisterModal();
              return unregister(["email", "password"]);
            }}
          >
            회원가입
          </button>
        </div>
        <div className={styles.login__SNSbtn}>
          <button className={`${styles.loginBtn} ${styles.loginBtn__facebook}`}>
            Login with Facebook
          </button>
          <button className={`${styles.loginBtn} ${styles.loginBtn__google}`}>
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
