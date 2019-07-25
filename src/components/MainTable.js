import React from 'react';
import dataSet from '../assets/thesis'
import Fuse from 'fuse.js';
import options from '../utils/options'

class MainTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
  }

  getInitialState() {

    const data = this.shuffle(dataSet)

    return {
      limit: 20,
      rawData: data,
      filteredData: data
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.filter();
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

  filter() {

    let filteredData = this.state.rawData;

    const filterSchool = {
      department: this.props.filter.department
    }

    const filterYears = {
      year: this.getYears(this.props.filter.yearRange)
    }

    filteredData = filteredData.filter(function (thesis) {
      for (const key in filterSchool) {
        if (thesis[key] === filterSchool[key][0]
          || thesis[key] === filterSchool[key][1])
          return true;
      }
      return false;
    })

    filteredData = filteredData.filter(function (thesis) {
      for (const key in filterYears) {
        for (let i = 0; i < filterYears[key].length; i++) {
          if (thesis[key] === filterYears[key][i])
            return true;
        }
      }
      return false;
    })

    if (this.props.filter.word) {
      let fuse = new Fuse(filteredData, options);

      this.setState({
        ...this.state,
        filteredData: fuse.search(this.props.filter.word)
      })

    } else {
      this.setState({
        ...this.state,
        filteredData: filteredData
      })
    }
  };

  render() {
    return (
      <ul>
        {this.state.filteredData.slice(0, this.state.limit).map((row, index) => (
          <li key={index}>
            <span>{row.title}</span>
            <span>{row.author}</span>
            <span>{row.year}</span>
            <span><a href={row.link} >{row.link}</a></span>
          </li>
        ))};
  </ul>
    )
  }
}
export default MainTable;