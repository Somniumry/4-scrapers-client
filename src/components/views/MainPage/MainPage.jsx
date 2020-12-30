import React, { useState, useEffect } from "react";
import Card from "./Sections/Card";
import LoginModal from "../Header/Sections/LoginModal/LoginModal";
import News from "../../../images/news.jpg";
import styles from "./MainPage.module.css";
import More from "./Sections/More";

const MainPage = ({ news, search, scrollHandler, scrolls }) => {
  const [NewsList, setNewsList] = useState([]);

  useEffect(() => {
    news
      .renderNews(search, scrolls) //
      .then(
        (newsDatas) => {
          if (search && !scrolls) {
            setNewsList(newsDatas.data);
          } else {
            setNewsList([...NewsList, ...newsDatas.data]);
          }
        }
        // search
        //   ? setNewsList([...NewsList, newsDatas.data])
        //   : setNewsList([...NewsList, ...newsDatas.data])
      );
  }, [news, search, scrolls]);

  const renderCards = () => {
    return NewsList.map((newsInfo, index) => (
      <div key={index}>
        <Card {...newsInfo} />
      </div>
    ));
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.view}>
          <div className={styles.gridContainer}>{renderCards()}</div>
        </div>
        {/* {Login && (
          <LoginModal />
          <div
            style={{
              background: "black",
              width: "100vw",
              height: "100vh",
              opacity: "0.6",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></div>
        )} */}
        {/* <button onClick={onClickHandler}>1111</button> */}
      </div>

      <More scrollHandler={scrollHandler} />
    </div>
  );
};

export default MainPage;
