import React from 'react';
import styles from '../NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.container}>
            <a className={styles.title} href="/sociologikon/">sociologikon</a>
        </div>
    )
}
export default NavBar;