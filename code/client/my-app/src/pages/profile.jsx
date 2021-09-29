import Navbar from "../components/navbar";
import { useSelector, useDispatch } from 'react-redux';
//import profile from "../../public/profile.jpg"
import "./profile.css"
import AllUserCourses from './allUserCourses';
export default function Profile() {
    const account__ = useSelector(state => state.account)
    const userCourses = useSelector(state => state.allCoursesUser)
    return (
        <>
            <Navbar></Navbar>
            <div className="continerProfile">
                <div className="boxProfile">
                    <div className="imgProfile">
                        <img className="imgTag" src={process.env.PUBLIC_URL + "profile.png"} alt="profile" />
                    </div>
                    <div className="infoProfile">
                        <span>name : {account__.username}</span>
                        <span>email : {account__.email} </span>
                        <span>id : {account__.lecturersId} </span>
                        <span>Courses : {userCourses.length} </span>
                    </div>
                </div>
            </div>
        </>
    )
}

