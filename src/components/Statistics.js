import React from 'react';
import styles from '../Statistics.module.scss'

const Statistics = (props) => {
    return (
        <div className={styles.container}>
            <p>Počet nalezených prací: <span>{props.total}</span></p>
        </div>
    )
}

export default Statistics;
