import React, { useState } from "react";
import styles from "./Card.module.css";
import scissors from "../../../../images/content_cut-24px.svg";

const Card = ({ title, description, imageURL, url, provider }) => {
  const category = ["정치", "기타", "스포츠"];
  const longPublisher = provider.length > 10 && styles.long__publisher;

  const [Hover, setHover] = useState(false);
  const [Scrap, setScrap] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  const onScrapHandler = () => {
    setScrap(true);
    setTimeout(() => {
      setScrap(false);
    }, 2000);
  };

  const renderOptions = () => {
    return category.map((opt, index) => <option key={index}>{opt}</option>);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imageURL})` }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {!Hover && !Scrap && (
        <div className={styles.title}>{title.slice(0, 30)}...</div>
      )}
      {Hover && !Scrap && (
        <div className={styles.hcontainer}>
          <div className={styles.background}></div>
          <div className={styles.hover}>
            <div className={styles.hover__category}>
              <select className={styles.hover__category_opt}>
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
