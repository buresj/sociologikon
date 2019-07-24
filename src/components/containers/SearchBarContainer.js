import { connect } from 'react-redux';
import SearchBar from '../SearchBar';
import { search } from '../../actions/search';

const mapStateToProps = (state, props) => {
  return {
    word: state.search.word,
    version: props.version
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search(word) {
      dispatch(search(word));
    }
  };
};

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;
