import LoggedReducer from './isLogged';
import counterReducer from './counter';
import accountReducer from './account';
import allCoursesReducer from './allCourses';
import allCoursesUserReducer from './allCoursesUser';
import { combineReducers } from 'redux';
//npm install --save redux-devtools-extension
//npm install redux

const allReducers = combineReducers({
    account: accountReducer,
    counter: counterReducer,
    accountLogged: LoggedReducer,
    allCourses: allCoursesReducer,
    allCoursesUser: allCoursesUserReducer
})



export default allReducers;