import React from 'react';
import { Link } from 'react-router-dom';
//imr
//sfc
import './home.css'
import Navbar from './../components/navbar';
import allInfoCourses from '../api/getAllCoursesMoodle';
import getAllUserCourses from '../api/getAllUserCourses';
import { loadAllUserCourses, loadAllCourses } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
const Home = () => {
    const account = useSelector(state => state.account)
    const dispatch = useDispatch();
    let id = { "lecturersId": account.lecturersId }
    getAllUserCourses(id).then(res => {
        const courses = []
        for (let i = 0; i < res.length; i++) {
            const userCourses = {
                "CoursesName": res[i].CoursesName,
                "Coursesid": res[i].Coursesid,
                "lecturersIds": res[i].lecturersIds,
                "studentAndGrade": res[i].studentAndGrade,
                "courseDetails": res[i].courseDetails
            }
            courses.push(userCourses);
        }
        console.log(courses);
        dispatch(loadAllUserCourses(courses))
    }).catch(err => {
        window.alert("err");
    })
    allInfoCourses().then(info => {
        console.log(info);
        dispatch(loadAllCourses(info))
    }).catch(err => {
        window.alert("err");
    })
    return (<>
        <Navbar></Navbar>
        <div className="main_home_page">
            <div className="main_h1_home">
                <h1 className="h1_home">
                    Home
                    <span className="span">Moodle</span>
                </h1>
            </div>
        </div>
    </>
    );
}
export default Home;