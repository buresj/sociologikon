import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../SearchBar.module.scss';

const SearchBar = (props) => {
  return (
    <div className={styles.search}>
      <input
        onChange={(event) => { props.search(event.target.value) }}
        placeholder={`Hledej`}
      />
    </div >
  );
}
export default SearchBar;
