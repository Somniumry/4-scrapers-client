import React, { useState, useEffect } from 'react';
import styles from './StoragePage.module.css';
import Card from './Sections/Card';
import Searchbar from './Sections/Searchbar';
import More from '../MainPage/Sections/More';

const categoryList = ['전체', '정치', '경제', '연예', '스포츠', '사회', '생활/문화', '세계', 'IT/과학', '기타' ];

export default function StoragePage({ news, scrolls, scrollHandler }) {

  const [NewsList, setNewsList] = useState([]);
  const [FilterNews, setFilterNews] = useState('');

  useEffect(() => {
    news
      .renderNewsInScrap(FilterNews, scrolls) // success: false 처리
      .then(newsData => {
        if(newsData.success) {
          setNewsList(newsData.data);
          setFilterNews(newsData.data);
          
          if(!scrolls) {
            setNewsList(newsData.data);
            window.scrollTo(0, 0);
          }
          else {
            setNewsList([...NewsList, ...newsData.data]);
          }
        }
        else {
          // setFilterNews('');
        }
      })
  }, [news, NewsList, scrolls]);


  const renderCards = () => {
    return NewsList.map((newsInfo, index) => (
      <div key={index}>
        <Card {...newsInfo} news={news} />
      </div>
    ));
  };

  const clickCategory = (item) => {
    // console.log(item);
    const checkCategory = NewsList.filter(news => {
      return item === news.category;
    });

    console.log('checkCategory ', checkCategory.length === 0);

    if(checkCategory.length === 0) {
      setFilterNews('');
    }
    else {
      setFilterNews(checkCategory);
      setNewsList(checkCategory);
    }
  }

  return (
      <div className={styles.container}>

        <div className={styles.categoryList}>
          {categoryList.map(item => {
              return <div className={styles.category} onClick={()=>clickCategory(item)}>{item}</div>
          })}
        </div>

        <div className={styles.scrapResult}>
        <span className={styles.totalNews}>총 {FilterNews.length}개가 검색되었습니다.</span>
          <Searchbar className={styles.searchInScrap}/>
        </div>

        {FilterNews === ''?
          <div className={styles.noData}>스크랩한 뉴스가 없거나 로그인 상태가 아닙니다.</div>
        :
          <div className={styles.view}>
            <div className={styles.gridContainer}>{renderCards()}</div>
            <More scrollHandler={scrollHandler} />
          </div>
        }
      </div>
  )
}