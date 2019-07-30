import { connect } from 'react-redux';
import MainTable from '../MainTable';

const mapStateToProps = state => {
  return {
    filter: {
      yearRange: state.settings.yearRange,
      department: state.settings.department,
      word: state.search.word,
      limit: state.settings.limit
    },
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
