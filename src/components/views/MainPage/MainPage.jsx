import React, { useState, useEffect } from "react";
import Card from "./Sections/Card";
import LoginModal from "../Header/Sections/LoginModal/LoginModal";
import News from "../../../images/news.jpg";
import styles from "./MainPage.module.css";
import More from './Sections/More';

const MainPage = ({ news }) => {
  const datas = [
    {
      image: News,
      title: "누가 하희라? 하희라·최수종 딸, 엄마 꼭닮은 미모 시선집중",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: ["카테고리 선택하기", "연예", "정치"],
      publisher: "중앙일보",
    },
    {
      image: News,
      title: "fsdffsd1",
      text: "sdfsdfsdf1",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd2",
      text: "sdfsdfsdf2",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd3",
      text: "sdfsdfsdf1",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd5",
      text: "sdfsdfsdf5",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd",
      text: "sdfsdfsdf",
      category: ["ndndn", "213", "142"],
      publisher: "jung",
    },
    {
      image: News,
      title: "fsdffsd1",
      text: "sdfsdfsdf1",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd2",
      text: "sdfsdfsdf2",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd3",
      text: "sdfsdfsdf1",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
    {
      image: News,
      title: "fsdffsd5",
      text: "sdfsdfsdf5",
      category: ["ndndn", "213", "142"],
      publisher: "jung1",
    },
  ];

  const [Query, setQuery] = useState("");
  const [Scrolls, setScrolls] = useState(1);
  const [NewsList, setNewsList] = useState([]);
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    news
      .renderNews(Query, Scrolls) //
      .then((newsDatas) => setNewsList(newsDatas));
  }, [news, Query, Scrolls]);

  const renderCards = () => {
    return datas.map((data, index) => (
      <div key={index}>
        <Card {...data} />
      </div>
    ));
  };

  const onClickHandler = () => {
    setLogin(true);
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

      <More />

    </div>
  );
};

export default MainPage;
