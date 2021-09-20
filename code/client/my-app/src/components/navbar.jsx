import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { account, logOut } from '../actions/index';

export default function Navbar() {
    const dispatch = useDispatch();
    const LogOutAccount = () => {
        dispatch(account(null));
        dispatch(logOut());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={"/"}>Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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
                        <li className="nav-item">
                            <button onClick={LogOutAccount} className="nav-link" to={"/not-found"}>
                                <Link to='/'>LogOut</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}
