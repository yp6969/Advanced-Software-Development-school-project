import { useRef } from "react";
//import "./allCourses.css";

import { useSelector, useDispatch } from 'react-redux';
import { loadAllCourses } from '../actions/index';

import Navbar from "../components/navbar";

import allInfoCourses from "../api/getAllCoursesMoodle";




export default function AllCourses() {

    const allCourses = useSelector(state => state.allCourses)
    const dispatch = useDispatch();

    console.log(allCourses);





    return (
        <>
            <Navbar></Navbar>
            <table >
                {allCourses.namesAndIds.map(element =>
                    <tr>
                        {console.log(element)}
                        <th>name: {element.name}</th>
                        <th>id: {element.Coursesid}</th>
                    </tr>
                )}
            </table>
        </>
    );
}

