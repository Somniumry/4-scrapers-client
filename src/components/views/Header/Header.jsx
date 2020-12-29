import React from "react";
import styles from "./Header.module.css";

import Logo from "./Sections/Logo";
import Home from "./Sections/Home";
import Scrap from "./Sections/Scrap";
import Searchbar from "../../utils/Searchbar";
import SignIn from "./Sections/SignIn";
import SignUp from "./Sections/SignUp";

export default function Header() {
  // const [clicked, setClicked] = useState(true);

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.left_menu}>
        <Home />
        <Scrap />
      </div>
      <Searchbar />
      <div className={styles.right_menu}>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}
