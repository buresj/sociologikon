export const SEARCH = 'SEARCH';
export const CHECK_INPUT = 'CHECK_INPUT';

export function search(word) {
    return {
        type: SEARCH,
        word: word
    }
}


export function checkInput(input) {
    return {
        type: CHECK_INPUT,
        input: input
    }
}