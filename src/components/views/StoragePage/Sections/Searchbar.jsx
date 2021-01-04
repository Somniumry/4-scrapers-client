import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import searchImg from "../../../../images/search-24px.svg";

export default function Searchbar({ searchQuery }) {
  const [Value, setValue] = useState("");

  const searchClickHandler = () => {
    searchQuery(Value);
    setValue("");
  };

  const searchPressHandler = (event) => {
    if (event.key === "Enter") {
      searchQuery(Value);
      setValue("");
    }
  };

  return (
    <div className={styles.searchbar}>
      <input
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={searchPressHandler}
      />
      <span>
        <img
          src={searchImg}
          width="30px"
          onClick={searchClickHandler}
          alt="search"
        />
      </span>
    </div>
  );
}
