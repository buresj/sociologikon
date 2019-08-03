import React from 'react';
import styles from '../NavBar.module.scss'
import LinearProgress from '@material-ui/core/LinearProgress';

const NavBar = (props) => {
    return (
        <div className={styles.container}>
            <a className={styles.title} href="/sociologikon/">sociologikon</a>
            {props.input ? <LinearProgress className={styles.loader} color="primary" /> : null}
        </div>
    )
}
export default NavBar;