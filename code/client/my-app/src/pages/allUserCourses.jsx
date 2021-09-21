import { useRef } from "react";
import "./allUserCourses.css";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../components/navbar";
import { Link } from 'react-router-dom';
export default function AllUserCourses() {
    const allCoursesUser = useSelector(state => state.allCoursesUser)
    return (
        <>
            <Navbar></Navbar>
            <h1 className="h1_home">Your Courses</h1>
            <div className="AllUserCourses">
                <Link to={`/newCourse`}>
                    new Course
                </Link>
            </div>
            <div className="allPage">
                <div className="containerAllCourses">
                    <div className="allCoursesBox">
                        <table className="tableAllCourses">
                            <thead>
                                <tr className="trHeadHAllCourses">
                                    <th className="thHeadHAllCourses">
                                        course name
                                    </th>
                                    <th className="thHeadHAllCourses">
                                        course id
                                    </th>
                                    <th className="thHeadHAllCourses">
                                        sum student
                                    </th>
                                    <th className="thHeadHAllCourses">
                                        Details and editing
                                    </th>
                                </tr>
                            </thead>
                            {allCoursesUser.map(element =>
                                <tr className="trAllCourses">
                                    {console.log(element)}
                                    <th className="thAllCourses"> {element.CoursesName}</th>
                                    <th className="thAllCourses"> {element.Coursesid}</th>
                                    <th className="thAllCourses"> {element.Coursesid}</th>
                                    <th className="thAllCourses">
                                        <Link to={`/course/${element.Coursesid}`}>
                                            Details and editing
                                        </Link>
                                    </th>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}