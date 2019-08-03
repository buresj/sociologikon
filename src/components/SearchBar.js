import React from 'react';
import styles from '../SearchBar.module.scss';

const SearchBar = (props) => {

  const debounce = (func, delay) => {
    let inDebounce
    return function () {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

  const delayedSearch = debounce(input => props.search(input), 400);

  const handleChange = e => delayedSearch(e.target.value);

  return (
    <div className={styles.search}>
      <input
        onChange={handleChange}
        placeholder={`Hledej`}
      />
    </div >
  );
}

export default SearchBar;
