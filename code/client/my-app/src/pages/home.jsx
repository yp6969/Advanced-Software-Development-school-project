import React from 'react';
import { Link } from 'react-router-dom';
//imr
//sfc
import './home.css'
import Navbar from './../components/navbar';


const Home = () => {
    return (<>
        <Navbar></Navbar>
        <div className="main_home_page">
            <div className="main_h1_home">
                <h1 className="h1_home">
                    Home
                    <span className="span">Moodle</span>
                </h1>
                <h1 className="h1_home_info">Advanced digital store</h1>
            </div>
            <h1>bla bla bla</h1>
        </div>
    </>
    );
}

export default Home;