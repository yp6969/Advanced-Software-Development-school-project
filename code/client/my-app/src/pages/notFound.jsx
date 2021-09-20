import React from 'react';
//imr
//sfc
//import './home.css'
import Navbar from './../components/navbar';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (<>
        <div >
            <h1>
                NotFound page
            </h1>
            <Link to="/login">click here to login page</Link>
        </div>

    </>
    );
}
export default NotFound;