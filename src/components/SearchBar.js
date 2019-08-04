import React from 'react';
import styles from '../SearchBar.module.scss';

const SearchBar = (props) => {

  let debounceTime;

  window.innerWidth < 500 ? debounceTime = 2000 : debounceTime = 400;

  const debounce = (func, delay) => {
    let inDebounce
    return function () {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
      props.checkInput(true)
    }
  }

  const delayedSearch = debounce(input => {
    setTimeout(() => props.checkInput(false), 400)
    props.search(input)
  }, debounceTime);

  const handleChange = e => delayedSearch(e.target.value);

  console.log(debounceTime)

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
