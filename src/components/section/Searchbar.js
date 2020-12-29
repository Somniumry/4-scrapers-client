import React, { useState, useEffect } from 'react';
import styles from '../../common/Header.module.css';
import searchImg from '../../style/images/search-24px.svg';

function handleClick(value) {
    console.log(value);
}

export default function Searchbar() {

    const [value, setValue] = useState('');

    useEffect(() => {
        // console.log(value);
    })

    return (
        <div className={styles.searchbar}>
            <input value={value} onChange={e => setValue(e.target.value) }/>
            <img src={searchImg} width="30px" onClick={() => handleClick(value)}/>
        </div>
    )
}
