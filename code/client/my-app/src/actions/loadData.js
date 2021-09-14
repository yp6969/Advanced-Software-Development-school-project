/*
import { useSelector, useDispatch } from 'react-redux';


import { logIn, logOut, incremented, account, loadCourses } from './index';

import getUser from '../api/getUser';
import allInfoCourses from '../api/getAllCoursesMoodle';

const dispatch = useDispatch(); //בעיה אפשר רק מתוך הוק

export const loadAllCourses = () => {

}
export const loadAccount = (user) => {
    getUser(user).then(user => {
        if (user) {
            //dispatch(logIn());
            //dispatch(incremented(12))
            //dispatch(account(user))
        } else {
            window.alert("משתמש או סיסמא לא תקינים");
        }
    }).catch(err => {
        window.alert("err1");
    })
}
export const loadLogIn = () => {

}
export const loadLogOut = () => {

}

*/