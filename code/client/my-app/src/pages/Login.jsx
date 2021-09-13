import { useRef } from "react";
import "./Login.css";

import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut, incremented, account } from '../actions/index';

import getUser from "../api/getUser";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const accountIn = useSelector(state => state.accountLogged)
  const counter = useSelector(state => state.counter)
  //const createAccount = useSelector(state => state.account)
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = { email: email.current.value, password: password.current.value };

    getUser(user).then(user => {
      console.log();
      if (user) {
        dispatch(logIn());
        //dispatch(incremented(12))
        dispatch(account(user))
      } else {
        window.alert("משתמש או סיסמא לא תקינים");
      }
    }).catch(err => {
      window.alert("err1");
    })
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
