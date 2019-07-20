import { FILTER_YEAR, FILTER_SCHOOL, FILTER_TYPE } from '../actions/settings';

const initialState = {
    yearRange: [2017, 2019],
    department: ['FSS', 'FSV'],
    typeOfWork: ['Bc', 'Mgr', 'PhD']
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

    return state;
}
