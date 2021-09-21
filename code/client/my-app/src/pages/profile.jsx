import Navbar from "../components/navbar";
import { useSelector, useDispatch } from 'react-redux';

import "./profile.css"
export default function Profile() {
    const account__ = useSelector(state => state.account)
    return (
        <>
            <Navbar></Navbar>
            <div className="continerProfile">
                <div className="boxProfile">
                    <div className="imgProfile">

                    </div>
                    <div className="infoProfile">
                        <span> {account__.username}</span>
                        <span>{account__.email} </span>
                    </div>
                </div>
            </div>
        </>
    )
}