
import "./allCourses.css";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "../components/navbar";

export default function AllCourses() {
    const allCourses = useSelector(state => state.allCourses)
    return (
        <>
            <Navbar></Navbar>
            <h1 className="h1_home">All University Courses</h1>
            <div className="allPage">
                <div className="containerAllCourses">
                    <div className="allCoursesBox">
                        <table className="tableAllCourses">
                            <thead>
                                <tr className="trHeadHAllCourses">
                                    <th className="thHeadHAllCourses">
                                        name
                                    </th>
                                    <th className="thHeadHAllCourses">
                                        id
                                    </th>
                                    <th className="thHeadHAllCourses">
                                        students
                                    </th>
                                </tr>
                            </thead>
                            {allCourses.namesAndIds.map(element =>
                                <tr className="trAllCourses">
                                    {console.log(element)}
                                    <th className="thAllCourses"> {element.name}</th>
                                    <th className="thAllCourses"> {element.Coursesid}</th>
                                    <th className="thAllCourses"> {element.Coursesid}</th>
                                </tr>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
