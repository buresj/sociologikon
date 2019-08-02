import React from 'react';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';
import styles from './MainLayout.module.scss';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}><NavBar /></div>
      <div className={styles.sidebar}><SideBar /></div>
      <div className={styles.dashboard}><DashBoard /></div>
    </div>
  );
}

export default App;
