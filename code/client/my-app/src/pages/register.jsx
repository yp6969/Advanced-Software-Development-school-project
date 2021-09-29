import React from 'react';
//imr
//sfc
import './register.css'
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import createUser from '../api/createUser';
import { Link } from 'react-router-dom';
export default function Register() {
    const username = useRef();
    const password1 = useRef();
    const password2 = useRef();
    const email = useRef();
    const lecturersId = useRef();
    const history = useHistory();
    const handleNewUser = async (e) => {
        e.preventDefault();

        var re = /^[A-Za-z]+$/;
        if (!re.test(username.current.value)) {
            window.alert("Name cannot include numbers")
            return
        }


        if (isNaN(lecturersId.current.value)) {
            window.alert("id must to be number only")
            return
        }
        if (password1.current.value !== password2.current.value) {
            window.alert("password not match")
            return
        }
        const info = {
            username: username.current.value,
            password: password1.current.value,
            email: email.current.value,
            lecturersId: lecturersId.current.value,
        }
        createUser(info).then(info => {
            window.alert("user saved");
            history.push("/login");
        }).catch(err => {
            window.alert("error server");
        })
    }

    return (<>
        <div className="containerRegister">
            <div className="RegisterBox">
                <div className="registerLeft">
                    <h3 className="registerLogoH3">Moodle</h3>
                    <h4 className="registerLogoH4">Register Page</h4>
                    <span className="registerDesc">
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleNewUser}>
                        <input
                            placeholder="name"
                            required
                            className="registerInput"
                            ref={username}
                            id="1"
                        />
                        <input
                            placeholder="password"
                            required
                            type="password"
                            minLength="1"
                            className="registerInput"
                            ref={password1}
                            minLength="6"
                            id="2"
                        />
                        <input
                            placeholder="password confirm"
                            required
                            type="password"
                            minLength="1"
                            className="registerInput"
                            ref={password2}
                            minLength="6"
                            id="3"
                        />
                        <input
                            placeholder="email"
                            required
                            minLength="1"
                            className="registerInput"
                            type="email"
                            ref={email}
                            id="4"
                        />
                        <input
                            placeholder="lecturers Id"
                            required
                            minLength="1"
                            className="registerInput"
                            ref={lecturersId}
                            id="5"
                        />
                        <button type="submit" className="registerButton" >
                            create new user
                        </button>
                    </form>
                    <Link to="/login">
                        <button className="registerRegisterButton" >
                            login page
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    </>
    );
}
