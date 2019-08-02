import React from 'react'
import styles from '../SideBar.module.scss'
import SettingsContainer from './containers/SettingsContainer';
import StatisticsContainer from '../components/containers/StatisticsContainer';
import SearchBarContainer from '../components/containers/SearchBarContainer';
import FooterContainer from './containers/FooterContainer';

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.settings}>
                <SearchBarContainer />
                <hr />
                <SettingsContainer />
                <hr />
                <StatisticsContainer />
                <hr />
                <FooterContainer version={'v0.4'} />
            </div>
        </div>
    )
}
export default SideBar;


