

function allCoursesReducer(state = null, action) {
    switch (action.type) {
        case 'loadCourses':
            return action.payload
        default:
            return state
    }
}
export default allCoursesReducer;