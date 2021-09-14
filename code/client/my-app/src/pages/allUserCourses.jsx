import { useRef } from "react";
//import "./allCourses.css";

import { useSelector, useDispatch } from 'react-redux';
import { loadAllCourses } from '../actions/index';

import Navbar from "../components/navbar";
import Course from "./course";
import { Link } from 'react-router-dom';
export default function AllUserCourses() {

    const allCoursesUser = useSelector(state => state.allCoursesUser)
    const dispatch = useDispatch();

    return (
        <>
            <Navbar></Navbar>
            {allCoursesUser.map(element =>
                <tr>
                    {console.log(element)}
                    <th>name: {element.CoursesName}</th>
                    <th>id: {element.Coursesid}</th>
                    <th>
                        <Link to={`/course/${element.Coursesid}`}>
                            Details
                        </Link>
                    </th>
                </tr>
            )}
        </>
    );
}

//להכין כרטיסה לכל קורס 
//כל כרטיסיה מובילה לעמוד חדש המציג את כל התלמידים שבקורס  
//ובעמוד זה יהיה אפשר להוסיף תלמיד למחוק תלמיד
//ןלקבל דוח שמכיל את הפרטים הבאים:
//אפשרות להוציא את כל המתונים לדף אקסל
//ממוצע 