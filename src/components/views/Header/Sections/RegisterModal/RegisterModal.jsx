import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./RegisterModal.module.css";
import logo from "../../../../../images/logo.png";
import { useForm } from "react-hook-form";
import { userSignIn } from "../../../../../_actions/user_action";

const RegisterModal = ({ renderLoginModal, renderRegisterModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
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
            renderRegisterModal();
          }}
        >
          돌아가기
        </div>
        <img src={logo} className={styles.login__logo} alt="logo" />
        <h2 className={styles.login__title}>Register</h2>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
          })}
          className={styles.input}
          placeholder="email"
        />
        {errors.email && <div className={styles.errors}>Email is required</div>}
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 10 })}
          className={styles.input}
          placeholder="password"
        />
        {errors?.password?.type === "required" && (
          <div className={styles.errors}>Password is required</div>
        )}
        {errors?.password?.type === "minLength" && (
          <div className={styles.errors}>Password length is at least 10</div>
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
              renderRegisterModal();
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

export default RegisterModal;
