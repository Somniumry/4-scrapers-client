import React from "react";
import { useDispatch } from "react-redux";
import qs from "qs";
import styles from "./LoginModal.module.css";
import logo from "../../../../../images/logo.png";
import { useForm } from "react-hook-form";
import { userSignIn, userToken } from "../../../../../_actions/user_action";

const LoginModal = ({
  renderLoginModal,
  renderRegisterModal,
  changeHeaderButton,
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, unregister } = useForm();

  const emailStyle = errors.email ? styles.errorInput : styles.input;
  const passwordStyle = errors.password ? styles.errorInput : styles.input;

  const onSubmit = async (loginData, event) => {
    event.preventDefault();
    const result = await dispatch(userSignIn(loginData));

    if (result.payload.success) {
      localStorage.setItem(
        "Authorization",
        result.payload.userData.accessToken
      );
      await dispatch(userToken());
      renderLoginModal();
      changeHeaderButton();
    } else {
      alert("로그인에 실패했습니다.");
    }
  };

  const gmailLoginToken = () => {
    const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";

    const queryStr = qs.stringify({
      client_id:
        "511993709803-talqppmktd1756qbe6pebmnf6fnif2vm.apps.googleusercontent.com",
      redirect_uri: "http://scrap.ml", //실제 deploy시에는 클라이언트 주소에 맞춰 수정해야 함
      response_type: "code",
      scope: "https://www.googleapis.com/auth/userinfo.email",
      access_type: "offline",
    });

    const loginUrl = AUTHORIZE_URI + "?" + queryStr;
    window.location.assign(loginUrl);
  };

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
          {/* <button className={`${styles.loginBtn} ${styles.loginBtn__facebook}`}>
            Login with Facebook
          </button> */}
          <button
            className={`${styles.loginBtn} ${styles.loginBtn__google}`}
            onClick={() => {
              renderLoginModal();
              gmailLoginToken();
              return unregister(["email", "password"]);
            }}
          >
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
