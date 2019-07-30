import { FILTER_YEAR, FILTER_SCHOOL, FILTER_TYPE, SETUP_VIEW } from '../actions/settings';

const initialState = {
    yearRange: [2017, 2019],
    department: ['FSS', 'FSV'],
    typeOfWork: ['Bc', 'Mgr', 'PhD'],
    limit: 20
}

export default function (state = initialState, action) {

    if (action.type === FILTER_YEAR) {
        return {
            ...state,
            yearRange: action.yearRange
        }
    }

    if (action.type === FILTER_SCHOOL) {
        return {
            ...state,
            department: action.department
        }
    }

    if (action.type === FILTER_TYPE) {
        return {
            ...state,
            typeOfWork: action.typeOfWork
        }
    }

    if (action.type === SETUP_VIEW) {
        return {
            ...state,
            limit: action.limit
        }
    }

    return state;
}
