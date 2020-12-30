import React from 'react';
import styles from './More.module.css';

function handleClick() {
    console.log('click');
}

export default function More() {
    return (
        <div className={styles.moreBox} onClick={handleClick}>
            더보기
        </div>
    )
}