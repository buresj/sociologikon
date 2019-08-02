export const COUNT = 'COUNT';

export function count(total) {
    return {
        type: COUNT,
        total: total
    }
}