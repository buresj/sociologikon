export const FILTER_YEAR = 'FILTER_YEAR';
export const FILTER_SCHOOL = 'FILTER_SCHOOL';
export const FILTER_TYPE = 'FILTER_TYPE';

export function changeYearRange(yearRange) {
    return {
        type: FILTER_YEAR,
        yearRange: yearRange
    }
}

export function changeSchool(school) {
    return {
        type: FILTER_SCHOOL,
        school: school
    }
}

export function changeType(typeOfWork) {
    return {
        type: FILTER_TYPE,
        typeOfWork: typeOfWork
    }
}
