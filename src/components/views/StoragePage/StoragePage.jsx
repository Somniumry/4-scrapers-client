import React from 'react';
import MainPage from '../MainPage/MainPage';
import styles from './StoragePage.module.css';

const categoryList = ['전체', '정치', '연예', '스포츠', '사회', '생활/문화', '세계', 'IT/과학', '기타' ];

export default function StoragePage() {
    return(
        <div className={styles.container}>
          {/* 카테고리 목록 */}
          <div className={styles.categoryList}>
            {categoryList.map(item => {
                return <div className={styles.category}>{item}</div>
            })}
          </div>
          {/* <MainPage /> */}
        </div>
    )
}