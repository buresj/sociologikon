import { connect } from 'react-redux';
import MainTable from '../MainTable';
import { changeLimit } from '../../actions/settings';
import { count } from '../../actions/statistics';
import { checkInput } from '../../actions/search';

const mapStateToProps = state => {
  return {
    filter: {
      yearRange: state.settings.yearRange,
      department: state.settings.department,
      word: state.search.word,
      type: state.settings.typeOfWork
    },
    limit: state.settings.limit
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeLimit(limit) {
      dispatch(changeLimit(limit))
    },
    count(total) {
      dispatch(count(total));
    },
    checkInput(state) {
      dispatch(checkInput(state));
    }
  }
};

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTable);

export default TableContainer;
