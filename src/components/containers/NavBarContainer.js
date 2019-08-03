import { connect } from 'react-redux';
import NavBar from '../NavBar';
import { checkInput } from '../../actions/search';

const mapStateToProps = (state) => {
    return {
        input: state.search.input
    }
};

const mapDispatchToProps = dispatch => {
    return {
        checkInput(state) {
            dispatch(checkInput(state));
        }
    };
};

const NavBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavBarContainer;
