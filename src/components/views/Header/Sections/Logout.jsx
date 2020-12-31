import React from "react";
import { useDispatch } from "react-redux";
import styles from "../Header.module.css";
import { userLogout } from "../../../../_actions/user_action";

export default function Logout({ changeHeaderButton }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    let ok = window.confirm("정말 로그아웃 하시겠습니까?");

    if (ok) {
      dispatch(userLogout()).then((result) => {
        if (result.payload.success) {
          localStorage.removeItem("Authorization");
        }
        changeHeaderButton();
      });
    } else {
      return;
    }
  };

  return (
    <div className={styles.right_menu_signIn} onClick={logoutHandler}>
      로그아웃
    </div>
  );
}
