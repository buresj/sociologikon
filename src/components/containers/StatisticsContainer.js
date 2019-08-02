import { connect } from 'react-redux';
import Statistics from '../Statistics';

const mapStateToProps = state => {
    return {
        total: state.statistics.total
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

const TableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics);

export default TableContainer;
