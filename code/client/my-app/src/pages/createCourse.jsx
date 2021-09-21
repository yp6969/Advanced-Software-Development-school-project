import { useRef } from "react";
import "./Login.css";
import { useSelector, useDispatch } from 'react-redux';
import { loadAllUserCourses, incremented, account, loadAllCourses } from '../actions/index';
import createCourse from "../api/createCourse";
import allInfoCourses from "../api/getAllCoursesMoodle";
import Navbar from "../components/navbar";
export default function CreateNewCourse() {
    const courseId = useRef();
    const courseName = useRef();
    const courseDetails = useRef();
    const account = useSelector(state => state.account)
    var allCoursesUser = useSelector(state => state.allCoursesUser)
    const dispatch = useDispatch();

    const handleClick = async (e) => {

        if (isNaN(courseId.current.value)) {
            window.alert("course Id need to be a number")
            return
        }
        var info = {
            "CoursesName": courseName.current.value,
            "Coursesid": courseId.current.value,
            "lecturersIds": [account.lecturersId],
            "studentAndGrade": [],
            "courseDetails": courseDetails.current.value
        }
        createCourse(info).then(res => {
            console.log(res);
            if (res) {
                allCoursesUser.push(info)
                dispatch(loadAllUserCourses(allCoursesUser))
                window.alert("new course add successfully completed");
            } else {
                window.alert("error server response empty");
            }
        }).catch(err => {
            window.alert("error server");
        })
        allInfoCourses().then(info => {
            dispatch(loadAllCourses(info))
        }).catch(err => {
            window.alert("error server");
        })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="mainCreatCourse">
                <input
                    placeholder="course Name"
                    required
                    className=""
                    ref={courseName}
                    id="1"
                />
                <input
                    placeholder="id number course"
                    required
                    minLength="1"
                    className=""
                    ref={courseId}
                    id="2"
                />
                <input
                    placeholder="course Details"
                    required
                    minLength="1"
                    className=""
                    ref={courseDetails}
                    id="3"
                />
                <button onClick={handleClick} >
                    create
                </button>
            </div>
        </>
    );
}