import { SEARCH } from '../actions/search'

const initialState = {
    word: null
}

export default function (state = initialState, action) {
    if (action.type === SEARCH) {
        return {
            ...state,
            word: action.word
        }
    }
    return state;
}