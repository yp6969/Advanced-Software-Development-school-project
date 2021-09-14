
function allCoursesUserReducer(state = null, action) {
    switch (action.type) {
        case 'loadAllUserCourses':
            return action.payload//לשלוח לפונקצית איפיאי מתאימה 
        default:
            return state
    }
}
export default allCoursesUserReducer;