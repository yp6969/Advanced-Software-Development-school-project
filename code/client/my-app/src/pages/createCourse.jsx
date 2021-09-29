import { useRef } from "react";
import "./createCourse.css";
import { useSelector, useDispatch } from 'react-redux';
import { loadAllUserCourses, loadAllCourses } from '../actions/index';
import createCourse from "../api/createCourse";
import allInfoCourses from "../api/getAllCoursesMoodle";
import Navbar from "../components/navbar";
import { useHistory } from "react-router-dom";

export default function CreateNewCourse() {
    const courseId = useRef();
    const courseName = useRef();
    const courseDetails = useRef();
    const account = useSelector(state => state.account)
    var allCoursesUser = useSelector(state => state.allCoursesUser)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async (e) => {
        if (courseName.current.value.length == 0 ||
            courseId.current.value.length == 0) {
            window.alert("empty field")
            return
        }
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
                history.push("/AllUserCourses");
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
                <div className="inputBoxCreactUser">
                    <h1>new course</h1>
                    <input
                        placeholder="course Name"
                        required
                        className="inputCreateUser"
                        ref={courseName}
                        id="1"
                    />
                    <input
                        placeholder="id number course"
                        required
                        minLength="1"
                        className="inputCreateUser"
                        ref={courseId}
                        id="2"
                    />
                    <input
                        placeholder="course Details"
                        required
                        minLength="1"
                        className="inputCreateUser"
                        ref={courseDetails}
                        id="3"
                    />
                    <div className="DivbuttonCreateCourse">
                        <button onClick={handleClick} className="buttonCreateCourse">
                            create
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}