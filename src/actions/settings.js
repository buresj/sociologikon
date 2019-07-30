export const FILTER_YEAR = 'FILTER_YEAR';
export const FILTER_SCHOOL = 'FILTER_SCHOOL';
export const FILTER_TYPE = 'FILTER_TYPE';
export const SETUP_VIEW = 'SETUP_VIEW';

export function changeYearRange(yearRange) {
    return {
        type: FILTER_YEAR,
        yearRange: yearRange
    }
}

export function changeSchool(department) {
    return {
        type: FILTER_SCHOOL,
        department: department
    }
}

export function changeType(typeOfWork) {
    return {
        type: FILTER_TYPE,
        typeOfWork: typeOfWork
    }
}

export function changeLimit(limit) {
    return {
        type: SETUP_VIEW,
        limit: limit
    }
}