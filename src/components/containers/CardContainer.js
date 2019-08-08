import { connect } from 'react-redux';
import Card from '../Card';
import { search } from '../../actions/search';

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        search(word) {
            dispatch(search(word));
        }
    };
};

const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);

export default CardContainer;