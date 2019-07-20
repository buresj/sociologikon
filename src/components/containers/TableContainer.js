import { connect } from 'react-redux';
import MainTable from '../MainTable';

const mapStateToProps = state => {
  return {
    word: state.search.word,
    yearRange: state.settings.yearRange,
    department: state.settings.school,
    typeOfWork: state.settings.typeOfWork
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTable);

export default TableContainer;
