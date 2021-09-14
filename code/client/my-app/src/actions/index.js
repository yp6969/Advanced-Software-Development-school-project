export const logIn = () => {
    return {
        type: "LOG_IN"
    }
}
export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const incremented = (number) => {
    return {
        type: 'counter/incremented',
        payload: number
    }
}

export const decremented = (number) => {
    return {
        type: 'counter/decremented',
        payload: number
    }
}

export const account = (account) => {
    return {
        type: 'account',
        payload: account ? account : null
    }
}

export const loadAllCourses = (courses) => {
    return {
        type: 'loadCourses',
        payload: courses ? courses : null
    }
}//for allCoursesReducer
export const loadAllUserCourses = (courses) => {
    return {
        type: 'loadAllUserCourses',
        payload: courses ? courses : null
    }
}//fo
