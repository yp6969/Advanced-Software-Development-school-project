import { useRef } from "react";
import "./Login.css";

import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut, incremented, account, loadAllCourses } from '../actions/index';

import getUser from "../api/getUser";

import allInfoCourses from "../api/getAllCoursesMoodle";

import getAllUserCourses from "../api/getAllUserCourses";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const accountIn = useSelector(state => state.accountLogged)
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const account__ = useSelector(state => state.account)

  const handleClick = async (e) => {
    e.preventDefault();
    const user = { email: email.current.value, password: password.current.value };

    getUser(user).then(user => {
      if (user) {
        dispatch(logIn());
        //dispatch(incremented(12))
        dispatch(account(user))

      } else {
        window.alert("משתמש או סיסמא לא תקינים");
      }
    }).catch(err => {
      window.alert("error");
    })


    allInfoCourses().then(info => {
      if (info) {
        console.log(info);
        dispatch(loadAllCourses(info))
      } else {
        window.alert("משתמש או סיסמא לא תקינים");
      }
    }).catch(err => {
      window.alert("err");
    })
    //console.log("===>account__: ")
    //console.log(account__); לא מתעדכן בנקודה זו מחכה לרינדור
    /*
    getAllUserCourses(account__.lecturersId).then(info => {
      console.log(info);
    }).catch(err => {
      window.alert("err");
    })
*/



  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Moodle</h3>
          <span className="loginDesc">
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >
              login
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Registe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
