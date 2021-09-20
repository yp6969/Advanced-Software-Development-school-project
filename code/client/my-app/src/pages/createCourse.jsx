import { useRef } from "react";
import "./Login.css";

import { useSelector, useDispatch } from 'react-redux';
import { loadAllUserCourses, incremented, account, loadAllCourses } from '../actions/index';

import getUser from "../api/getUser";
import createCourse from "../api/createCourse";
import allInfoCourses from "../api/getAllCoursesMoodle";

import getAllUserCourses from "../api/getAllUserCourses";
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
        console.log(info);
        createCourse(info).then(res => {
            console.log(res);
            if (res) {
                allCoursesUser.push(info)
                dispatch(loadAllUserCourses(allCoursesUser))
                window.alert("new course add successfully completed");
            } else {
                window.alert("err1111111");
            }
        }).catch(err => {
            window.alert("err");
        })
        allInfoCourses().then(info => {
            console.log(info);
            dispatch(loadAllCourses(info))
        }).catch(err => {
            window.alert("err");
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