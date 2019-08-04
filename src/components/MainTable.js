import React from 'react';
import dataSet from '../assets/thesis'
import Fuse from 'fuse.js';
import options from '../utils/options';
import styles from '../Table.module.scss';
import Card from './Card'

class MainTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
    this.props.count(this.state.filteredData.length);
    this.handleScroll = this.handleScroll.bind(this);
  }

  getInitialState() {
    const data = this.shuffle(dataSet)
    return {
      rawData: data,
      filteredData: this.filterYears(data)
    };
  }
  componentDidUpdate(prevProps, prevState) {

    if (this.props.filter.yearRange !== prevProps.filter.yearRange) {
      this.filter();
    }

    if (this.props.filter.department !== prevProps.filter.department) {
      this.filter();
    }

    if (this.props.filter.type !== prevProps.filter.type) {
      this.filter();
    }

    if (this.props.filter.word !== prevProps.filter.word) {
      this.filter();
    }

    if (this.state.filteredData !== prevState.filteredData) {
      this.props.count(this.state.filteredData.length);
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getYears(yearRange) {
    let years = [];
    for (let i = yearRange[0]; i < yearRange.slice(-1)[0] + 1; i++) {
      years.push(i);
    }
    return years;
  }

  filterYears(data) {
    const filterYears = {
      year: this.getYears(this.props.filter.yearRange)
    }
    data = data.filter(function (thesis) {
      for (const key in filterYears) {
        for (let i = 0; i < filterYears[key].length; i++) {
          if (thesis[key] === filterYears[key][i])
            return true;
        }
      }
      return false;
    });
    return data;
  }

  filterType(data) {
    const filterType = {
      type: this.props.filter.type
    }
    data = data.filter(function (thesis) {
      for (const key in filterType) {
        if (thesis[key] === filterType[key][0]
          || thesis[key] === filterType[key][1]
          || thesis[key] === filterType[key][2]
        )
          return true;
      }
      return false;
    })
    return data;
  }

  filterSchool(data) {
    const filterSchool = {
      department: this.props.filter.department
    }
    data = data.filter(function (thesis) {
      for (const key in filterSchool) {
        if (thesis[key] === filterSchool[key][0]
          || thesis[key] === filterSchool[key][1])
          return true;
      }
      return false;
    });
    return data;
  }

  filter() {

    let filteredData = this.state.rawData;
    filteredData = this.filterSchool(filteredData);
    filteredData = this.filterYears(filteredData);
    filteredData = this.filterType(filteredData);

    if (this.props.filter.word) {
      let fuse = new Fuse(filteredData, options);
      this.props.changeLimit(10);
      this.setState({
        ...this.state,
        filteredData: fuse.search(this.props.filter.word)
      });

    } else {
      this.props.changeLimit(10);
      this.setState({
        ...this.state,
        filteredData: filteredData
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };


  debounce = (func, delay) => {
    let inDebounce
    return function () {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      this.checkSpinner()
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }

  handleScroll = this.debounce(() => {

    if (this.checkBottom()) {
      this.props.changeLimit(this.props.limit + 5);
    }
  }, 1000);

  checkBottom = () => {
    return window.innerHeight + window.pageYOffset + 1 >= document.body.offsetHeight
  }

  checkSpinner = () => {
    if (this.checkBottom()) {
      this.props.checkInput(true);
    } else {
      setTimeout(() => this.props.checkInput(false), 800);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.filteredData.slice(0, this.props.limit).map((thesis) => (
          <Card
            key={Math.random()}
            thesis={thesis}
          />
        ))};
      </div>
    )
  }
}
export default MainTable;