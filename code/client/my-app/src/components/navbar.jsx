import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { account, logOut } from '../actions/index';
import './navbar.css'
//import LogoutIcon from '@mui/icons-material/Logout';
//import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
    const dispatch = useDispatch();
    const LogOutAccount = () => {
        dispatch(account(null));
        dispatch(logOut());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="homeDiv">
                    <Link className="navbar-brand" id="homelink" to={"/"}>
                        <i class="material-icons" id="home-icon">home</i>
                        Home
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/allCourses"}>all Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/AllUserCourses"}>your courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profile"}>profile</Link>
                        </li>

                    </ul>
                </div>
                <div className="logoutDiv" onClick={LogOutAccount} to={"/not-found"}>
                    <i class="material-icons" id="logout-icon">logout</i>
                    <Link className="dd" to='/'>LogOut</Link>
                </div>
            </nav >
        </div >
    )
}
