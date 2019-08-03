import React from 'react';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';
import styles from './MainLayout.module.scss';
import NavBarContainer from './components/containers/NavBarContainer';

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}><NavBarContainer /></div>
      <div className={styles.sidebar}><SideBar /></div>
      <div className={styles.dashboard}><DashBoard /></div>
    </div>
  );
}

export default App;
