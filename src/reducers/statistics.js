import { COUNT } from '../actions/statistics'

const initialState = {
    total: null
}

export default function (state = initialState, action) {
    if (action.type === COUNT) {
        return {
            ...state,
            total: action.total
        }
    }
    return state;
}