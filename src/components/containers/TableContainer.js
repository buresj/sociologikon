import { connect } from 'react-redux';
import MainTable from '../MainTable';
import { count } from '../../actions/statistics'

const mapStateToProps = state => {
  return {
    filter: {
      yearRange: state.settings.yearRange,
      department: state.settings.department,
      word: state.search.word,
      type: state.settings.typeOfWork,
      limit: state.settings.limit
    }
  }
};

const mapDispatchToProps = dispatch => {
  return {
    count(total) {
      dispatch(count(total));
    }
  }
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTable);

export default TableContainer;
