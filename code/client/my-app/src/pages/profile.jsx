import { useRef } from "react";
import Navbar from "../components/navbar";
//import "./profile.css";
import { useSelector, useDispatch } from 'react-redux';
import { account } from '../actions/index';


export default function Profile() {


    const account__ = useSelector(state => state.account)
    console.log(account__);

    return (
        <>
            <Navbar></Navbar>
            <div>
                <tr>
                    <tr> {account__.username}</tr>
                    <tr>{account__.email} </tr>
                </tr>
            </div>
        </>
    )
}
