import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userToken } from "../../../_actions/user_action";
import styles from "./StoragePage.module.css";
import Card from "./Sections/Card";
import Searchbar from "./Sections/Searchbar";
import More from "./Sections/More";

const categoryList = [
  "전체",
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

export default function StoragePage({ news }) {
  const dispatch = useDispatch();

  const [NewsList, setNewsList] = useState([]);
  const [Page, setPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("전체");
  const [Length, setLength] = useState(0);
  const [Filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(userToken());

    news
      .renderNewsInScrap(Search, Page) // success: false 처리
      .then((newsDatas) => {
        if (Search && Page === 1) {
          setNewsList(newsDatas.data);
          setFilter(newsDatas.data);
          setLength(newsDatas.data.length);
          setCategory("전체");
          window.scrollTo(0, 0);
        } else {
          if (!newsDatas.data.length) {
            alert("더 이상 불러올 뉴스가 없습니다.");
            return;
          }

          setNewsList((News) => [...News, ...newsDatas.data]);

          if (Category === "전체") {
            setFilter((News) => {
              setLength([...News, ...newsDatas.data].length);
              return [...News, ...newsDatas.data];
            });
          } else {
            const filterNews = newsDatas.data.filter(
              (news) => news.category === Category
            );
            setFilter((News) => {
              setLength([...News, ...filterNews].length);
              return [...News, ...filterNews];
            });
          }
        }
      });
  }, [news, Search, Page, dispatch]);

  const renderCards = () => {
    return Filter.map((newsInfo, index) => (
      <div key={index}>
        <Card
          {...newsInfo}
          news={news}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    ));
  };

  const pageHandler = () => {
    setPage(Page + 1);
  };

  const deleteHandler = (id) => {
    const deleteNewsList = NewsList.filter((news) => news.id !== id);
    const deleteFilter = Filter.filter((news) => news.id !== id);

    setNewsList(deleteNewsList);
    setFilter(deleteFilter);
  };

  const editHandler = (id, category) => {
    if (Category === "전체") {
      const editNewsList = NewsList.map((news) => {
        if (news.id === id) {
          news.category = category;
        }
        return news;
      });
      const editFilter = Filter.map((news) => {
        if (news.id === id) {
          news.category = category;
        }
        return news;
      });

      setNewsList(editNewsList);
      setFilter(editFilter);
    } else {
      const editNewsList = NewsList.map((news) => {
        if (news.id === id) {
          news.category = category;
        }
        return news;
      });
      const editFilter = Filter.filter((news) => news.id !== id);

      setNewsList(editNewsList);
      setFilter(editFilter);
    }
  };

  const searchQuery = (query) => {
    setSearch(query);
    setPage(1);
  };

  const clickCategory = (item) => {
    setCategory(item);

    const filterNews = NewsList.filter((news) => {
      if (item === "전체") {
        return true;
      } else {
        return news.category === item;
      }
    });

    setFilter(filterNews);
    setLength(filterNews.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryList}>
        {categoryList.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.category}
              onClick={() => clickCategory(item)}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className={styles.scrapResult}>
        <span className={styles.totalNews}>
          총 {Category} {Length}개가 검색되었습니다.
        </span>
        <Searchbar className={styles.searchInScrap} searchQuery={searchQuery} />
      </div>

      {!Length ? (
        <div className={styles.noData}>스크랩한 뉴스가 없습니다.</div>
      ) : (
        <div className={styles.view}>
          <div className={styles.gridContainer}>{renderCards()}</div>
          <More pageHandler={pageHandler} />
        </div>
      )}
    </div>
  );
}
