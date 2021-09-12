import LoggedReducer from './isLogged';
import counterReducer from './counter';
import accountReducer from './account';
import { combineReducers } from 'redux';
//npm install --save redux-devtools-extension
//npm install redux

const allReducers = combineReducers({
    account: accountReducer,
    counter: counterReducer,
    accountLogged: LoggedReducer,
})



export default allReducers;