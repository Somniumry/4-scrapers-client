import React from 'react';
import styles from '../../common/Header.module.css';

import logoImg from '../../style/images/logo.png';
import searchImg from '../../style/images/search-24px.svg';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logoImg} width="80px" alt="logo" />
            </div>
            <div className={styles.left_menu}>
                <div className={styles.left_menu_home}>홈</div>
                <div className={styles.left_menu_scrap}>스크랩</div>
            </div>
            <div className={styles.searchbar}>
                <span></span>
                <img src={searchImg}/>
            </div>
            <div className={styles.right_menu}>
                <div className={styles.right_menu_signIn}>로그인</div>
                <div className={styles.right_menu_signUp}>회원가입</div>
            </div>
        </div>
    )
}