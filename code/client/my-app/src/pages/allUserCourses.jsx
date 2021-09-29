import "./allUserCourses.css";
import { useSelector } from 'react-redux';
import Navbar from "../components/navbar";
import { Link } from 'react-router-dom';
export default function AllUserCourses() {
    const allCoursesUser = useSelector(state => state.allCoursesUser)
    return (
        <>
            <Navbar></Navbar>
            <h1 className="h1_home">Your Courses</h1>
            <div className="allPage">
                <div className="containerAllUserCourses">
                    <div className="goCreateCourseButton">
                        <Link to={`/newCourse`} className="goCreateCourseLink">
                            Create a New Course
                        </Link>
                    </div>
                    <div className="allUserCoursesBox">
                        <table className="tableUserAllCourses">
                            <thead>
                                <tr className="UserTrHeadHAllCourses">
                                    <th className="UserThHeadHAllCourses">
                                        name
                                    </th>
                                    <th className="UserThHeadHAllCourses">
                                        id
                                    </th>
                                    <th className="UserThHeadHAllCourses">
                                        students
                                    </th>
                                    <th className="UserThHeadHAllCourses">

                                    </th>
                                </tr>
                            </thead>
                            {allCoursesUser.map(element =>
                                <tr className="trAllCourses">
                                    <th className="thAllCourses"> {element.CoursesName}</th>
                                    <th className="thAllCourses"> {element.Coursesid}</th>
                                    <th className="thAllCourses"> {element.studentAndGrade.length}</th>
                                    <th className="thAllCourses">
                                        <Link to={`/course/${element.Coursesid}`} className="goToCourse">
                                            Entrance
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