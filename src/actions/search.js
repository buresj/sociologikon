export const SEARCH = 'SEARCH';

export function search(word) {
    return {
        type: SEARCH,
        word: word
    }
}