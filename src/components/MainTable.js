import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from '../assets/thesis'
import Fuse from 'fuse.js';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 250,
    fontSize: 5,
    width: '59%',
    marginTop: theme.spacing(8),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650
  },
  info: {
    fontSize: 10,
    fontWeight: 'cursive'
  }
}));

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getYears(yearRange) {
  let years = [];
  for (let i = yearRange[0]; i < yearRange.slice(-1)[0] + 1; i++) {
    years.push(i);
  }
  return years;
}

const MainTable = props => {

  const options = {
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 30,
    minMatchCharLength: 3,
    keys: [
      "title",
      "keywords",
      "author"
    ]
  };

  let rows = data;

  let filterSchool = {
    department: props.department
  };

  // let filterType = {
  //   type: props.typeOfWork
  // }

  let filterYears = {
    year: getYears(props.yearRange)
  }


  rows = rows.filter(function (thesis) {
    for (const key in filterSchool) {
      if (thesis[key] === filterSchool[key][0]
        || thesis[key] === filterSchool[key][1])
        return true;
    }
    return false;
  });

  // rows = rows.filter(function (thesis) {
  //   for (const key in filterType) {
  //     for (let i = 0; i < filterType[key].length; i++) {
  //       if (thesis[key] === filterType[key][i])
  //         return true;
  //     }
  //   }
  //   return false;
  // });

  rows = rows.filter(function (thesis) {
    for (const key in filterYears) {
      for (let i = 0; i < filterYears[key].length; i++) {
        if (thesis[key] === filterYears[key][i])
          return true;
      }
    }
    return false;
  });

  console.log(rows.length)
  const fuse = new Fuse(rows, options);

  const filtered = () => {
    if (props.word) {
      return fuse.search(props.word).slice(0, 20);
    }
    return shuffle(rows.slice(0, 20));
  };

  console.log(filtered().length)
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}
        size='small' >
        <TableBody>
          {filtered().map(row => (
            <TableRow key={row.link}>
              <TableCell component="th" scope="row">
                {row.title}
                <div>&nbsp;</div>
                <div className={classes.info}>
                  <i>
                    <span>Autor/ka: {row.author}</span>
                    <span>Rok: {row.year}</span>
                    <span>Odkaz: <a href={row.link} >{row.link}</a></span>
                  </i>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );

}
export default MainTable;