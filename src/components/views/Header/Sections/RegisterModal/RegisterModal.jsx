import React from "react";
import { useDispatch } from "react-redux";
import styles from "./RegisterModal.module.css";
import logo from "../../../../../images/logo.png";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../../../../_actions/user_action";

const RegisterModal = ({ renderRegisterModal }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    errors,
    unregister,
    getValues,
  } = useForm();

  const emailStyle = errors.email ? styles.errorInput : styles.input;
  const nickNameStyle = errors.name ? styles.errorInput : styles.input;
  const passwordStyle = errors.password ? styles.errorInput : styles.input;
  const rePasswordStyle = errors.repassword ? styles.errorInput : styles.input;

  const Password = getValues("password");
  const Repassword = watch("repassword");

  const onSubmit = (data, event) => {
    event.preventDefault();
    renderRegisterModal();
    // dispatch(userSignUp(data)).then(//성공 후 얼럴트 창 확인 누르면 renderRegiterModal 실행);
    //성공 후 renderLoginModal 발동
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <form className={styles.register} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={styles.back}
          onClick={() => {
            renderRegisterModal();
          }}
        >
          돌아가기
        </div>
        <img src={logo} className={styles.register__logo} alt="logo" />
        <h2 className={styles.register__title}>Create Account</h2>
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
          type="text"
          name="name"
          ref={register({
            required: true,
          })}
          className={nickNameStyle}
          placeholder="nickname"
        />
        {errors.name && (
          <div className={styles.errorMessage}>Nickname is required</div>
        )}
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 10 })}
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
            required: true,
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
        <input
          className={styles.btnRegister}
          type="submit"
          value="계정 만들기"
          onClick={() => {
            return unregister("password");
          }}
        />
      </form>
    </div>
  );
};

export default RegisterModal;
