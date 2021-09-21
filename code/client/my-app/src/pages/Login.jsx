import { useRef } from "react";
import "./Login.css";
import { useDispatch } from 'react-redux';
import { logIn, logOut, incremented, account, loadAllCourses } from '../actions/index';
import getUser from "../api/getUser";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = { email: email.current.value, password: password.current.value };
    getUser(user).then(user => {
      if (user) {
        dispatch(logIn());
        dispatch(account(user))
      } else {
        window.alert("user or password wrong");
      }
    }).catch(err => {
      window.alert("server error");
    })
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogoH3">Moodle</h3>
          <h4 className="loginLogoH4">LogIn Page</h4>
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
          </form>
          <Link to="register">
            <button className="loginRegisterButton">
              Registe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
