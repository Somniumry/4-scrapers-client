import React from 'react';
import styles from '../../common/Header.module.css';

import Logo from './Logo';
import Home from './Home';
import Scrap from './Scrap';
import Searchbar from './Searchbar';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Header() {

    // const [clicked, setClicked] = useState(true);

    return (
            <div className={styles.header}>
                <Logo />
                <div className={styles.left_menu}>
                    <Home />
                    <Scrap />
                </div>
                <Searchbar />
                <div className={styles.right_menu}>
                    <SignIn />
                    <SignUp />
                </div>
            </div>
    )

}