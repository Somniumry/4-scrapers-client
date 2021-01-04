import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./DeleteUserModal.module.css";
import alert from "../../../../../images/alert-icon.svg";
import { useForm } from "react-hook-form";
import { userDelete } from "../../../../../_actions/user_action";

const DeleteUserModal = ({
  renderDeleteUserModal,
  renderUserInfoModal,
  changeHeaderButton,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, unregister } = useForm();

  const passwordStyle = errors.password ? styles.errorInput : styles.input;

  const onSubmit = async (deleteData, event) => {
    event.preventDefault();
    const result = await dispatch(userDelete(deleteData));
    if (result.payload.success) {
      window.alert("성공적으로 계정이 삭제되었습니다.");
      localStorage.removeItem("Authorization");
      renderDeleteUserModal();
      changeHeaderButton();
      history.push("/");
    } else {
      window.alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <form className={styles.delete} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={styles.back}
          onClick={() => {
            renderDeleteUserModal();
          }}
        >
          돌아가기
        </div>
        <img src={alert} className={styles.delete__logo} alt="logo" />
        <h2 className={styles.delete__title}>Delete Your Account</h2>
        <div className={styles.message}>
          <h4 className={styles.message__warning}>
            Warning: 계정을 한 번 삭제하면, 다시 되돌릴 수 없습니다.
          </h4>
          <span className={styles.message__text}>
            정말 계정을 삭제하길 원하신다면, 패스워드 입력 후 삭제하기 버튼을
            눌러주세요.
          </span>
          <input
            type="password"
            name="password"
            ref={register({
              required: true,
              minLength: 10,
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
          <div className={styles.delete__btn}>
            <input
              className={styles.delete__btnDelete}
              type="submit"
              value="삭제하기"
            />
            <button
              className={styles.delete__btnDelete}
              onClick={() => {
                renderDeleteUserModal();
                return unregister("password");
              }}
            >
              취소하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteUserModal;
