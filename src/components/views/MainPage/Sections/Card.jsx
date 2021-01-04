import React, { useState } from "react";
import styles from "./Card.module.css";
import scissors from "../../../../images/content_cut-24px.svg";

const Card = ({
  news,
  title,
  description,
  imageURL,
  url,
  provider,
  datePublished,
}) => {
  const categoryList = [
    "카테고리 선택하기",
    "정치",
    "경제",
    "연예",
    "스포츠",
    "사회",
    "생활/문화",
    "세계",
    "IT/과학",
    "기타",
  ];

  const categoryHash = {
    "카테고리 선택하기": 10,
    정치: 1,
    경제: 2,
    연예: 3,
    스포츠: 4,
    사회: 5,
    "생활/문화": 6,
    세계: 7,
    "IT/과학": 8,
    기타: 9,
  };

  const deleteMSN = provider.match(/ on MSN.com/);
  provider = deleteMSN ? provider.slice(0, deleteMSN.index) : provider;
  const longPublisher = provider.length > 10 && styles.long__publisher;

  const [Hover, setHover] = useState(false);
  const [Scrap, setScrap] = useState(false);
  const [Category, setCategory] = useState("");

  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  const selectCategory = (event) => {
    const categoryIndex = event.target.options.selectedIndex;
    const categoryName = categoryList[categoryIndex];
    const categoryId = categoryHash[categoryName];
    setCategory(categoryId);
  };

  const onScrapHandler = () => {
    news
      .scrapNews({
        title,
        description,
        imageURL,
        url,
        provider,
        datePublished,
        category: Category,
      })
      .then((result) => {
        if (result.success) {
          setScrap(true);
          setTimeout(() => {
            setScrap(false);
          }, 2000);
        } else {
          alert("스크랩 서비스를 이용하려면, 로그인이 필요합니다.");
        }
      });
  };

  const renderOptions = () => {
    return categoryList.map((opt, index) => (
      <option key={index} value={opt}>
        {opt}
      </option>
    ));
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imageURL})` }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {!Hover && !Scrap && (
        <div className={styles.title}>{title.slice(0, 28)}...</div>
      )}
      {Hover && !Scrap && (
        <div className={styles.hcontainer}>
          <div className={styles.background}></div>
          <div className={styles.hover}>
            <div className={styles.hover__category}>
              <select
                className={styles.hover__category_opt}
                onClick={selectCategory}
              >
                {renderOptions()}
              </select>
              <div onClick={onScrapHandler}>저장</div>
            </div>
            <div className={styles.hover__title}>{title.slice(0, 30)}...</div>
            <div className={styles.hover__text}>
              {description.slice(0, 120)}...
            </div>
            <a href={url} target="_blank" rel="noreferrer">
              <div className={`${styles.hover__publisher} ${longPublisher}`}>
                {provider} 기사 보러가기
              </div>
            </a>
          </div>
        </div>
      )}
      {Scrap && (
        <div className={styles.hcontainer}>
          <div className={styles.background}></div>
          <div className={styles.scrap}>
            <div className={styles.scrap__icon}>
              <span>- - - - - - - - - - - - - - - -</span>
              <img src={scissors} alt="scissors" />
            </div>
            <div className={styles.scrap__message}>
              내 스크랩 저장소에 추가!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
