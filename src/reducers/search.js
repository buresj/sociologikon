import { SEARCH, CHECK_INPUT } from '../actions/search'

const initialState = {
    word: null,
    input: false
}

export default function (state = initialState, action) {
    if (action.type === SEARCH) {
        return {
            ...state,
            word: action.word
        }
    }

    if (action.type === CHECK_INPUT) {
        return {
            ...state,
            input: action.input
        }
    }

    return state;
}