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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to={"/"}>Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to={"/home"}>studentList</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/not-found"}>studentList</Link>
                        </li>
                        <li class="nav-item">
                            <button onClick={LogOutAccount} class="nav-link" to={"/not-found"}>
                                <Link to='/'>LogOut</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}
