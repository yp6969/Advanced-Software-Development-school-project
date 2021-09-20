import Navbar from "../components/navbar";
//import "./profile.css";
import { useSelector, useDispatch } from 'react-redux';


export default function Profile() {
    const account__ = useSelector(state => state.account)
    return (
        <>
            <Navbar></Navbar>
            <div className="continerProfile">
                <tr>
                    <tr> {account__.username}</tr>
                    <tr>{account__.email} </tr>

                    <img src="../../public/pp.jpg" alt="../../public/pp.jpg" />
                    <img src="public/pp.jpg" alt="public/pp.jpg" />

                </tr>
            </div>
        </>
    )
}
