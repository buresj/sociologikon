import { connect } from 'react-redux';
import Settings from '../Settings';
import { checkInput } from '../../actions/search';
import { changeYearRange, changeSchool, changeType, changeLimit } from '../../actions/settings';

const mapStateToProps = (state, props) => {
    return {
        yearRange: state.settings.yearRange,
        department: state.settings.department,
        typeOfWork: state.settings.typeOfWork,
        limit: state.settings.limit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeLimit(limit) {
            dispatch(changeLimit(limit))
        },
        changeYearRange(yearRange) {
            dispatch(changeYearRange(yearRange));
        },
        changeSchool(school) {
            dispatch(changeSchool(school));
        },
        changeType(typeOfWork) {
            dispatch(changeType(typeOfWork));
        },
        checkInput(state) {
            dispatch(checkInput(state));
        }
    };
};

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);

export default SearchBarContainer;