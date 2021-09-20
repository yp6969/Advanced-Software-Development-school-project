import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import "./course.css";
import Navbar from "../components/navbar";
import deleteStudentFromCourse from '../api/deleteStudentFromCourse';
import { loadAllUserCourses, incremented } from './../actions/index';
import { useRef, useState } from "react";
import addStudentToCourse from '../api/addStudentToCourse';
export default function Course(props) {
    var sumAVG = 0;
    const id = useRef();
    const grade = useRef();
    const name = useRef();
    var account = useSelector(state => state.account)
    var allCoursesUser = useSelector(state => state.allCoursesUser)
    var counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const courseId = props.match.params.id;
    var ind;
    for (let index = 0; index < allCoursesUser.length; index++)
        if (courseId == allCoursesUser[index].Coursesid)
            ind = index

    const handleDelete = (lecturersId, Coursesid, student) => {

        deleteStudentFromCourse({ lecturersId, Coursesid, student }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
            window.alert("err");
        })

        //במקום כל זה צריך פשוט לטעון נתונים מחדש מהשרת פחות קוד ויותר מדיוק כאשר מוחקים כפילויות
        const newstudentAndGrade = []
        var indexChangeCourse = -1;
        for (let index = 0; index < allCoursesUser.length; index++) {
            if (Coursesid == allCoursesUser[index].Coursesid) {
                indexChangeCourse = index;
                for (let index2 = 0; index2 < allCoursesUser[index].studentAndGrade.length; index2++) {
                    if (allCoursesUser[index].studentAndGrade[index2].id_stu != student.id_stu) {
                        newstudentAndGrade.push(allCoursesUser[index].studentAndGrade[index2])
                    }
                }
            }
        }
        allCoursesUser[indexChangeCourse].studentAndGrade = newstudentAndGrade
        dispatch(loadAllUserCourses(allCoursesUser))
        dispatch(incremented(1))
    }

    const handleAddStudent = (e) => {
        if (isNaN(grade.current.value) || grade.current.value.length > 2 || grade.current.value.length < 1 || isNaN(id.current.value)) {
            window.alert("error id")
            return
        }
        var flag = true
        allCoursesUser[ind].studentAndGrade.map(element => {
            if (element.id_stu == id.current.value) flag = false
        });
        if (!flag) {
            window.alert("error: this id already in course")
            return
        }
        var info = {
            "lecturersId": account.lecturersId,
            "Coursesid": allCoursesUser[ind].Coursesid,
            "studentAndGrade": {
                "nameStudent": name.current.value,
                "id_stu": id.current.value,
                "grade": grade.current.value
            }
        }
        allCoursesUser[ind].studentAndGrade.push({ "id_stu": id.current.value, "grade": grade.current.value, "nameStudent": name.current.value })
        addStudentToCourse(info).then(info => {
            console.log(info);
        }).catch(err => {
            window.alert("err");
        })
        dispatch(loadAllUserCourses(allCoursesUser))
        dispatch(incremented(1))
        const input = document.getElementsByClassName('InputInputUser');

    }
    const handleAVG = (number) => {
        sumAVG += Number(number)
    }
    const Fails = () => {
        var course_ = allCoursesUser[ind].studentAndGrade
        const level = 56
        var sumFails = 0
        course_.map(element => {
            if (Number(element.grade) < level) sumFails++
        })
        return sumFails
    }
    const beastGrade = () => {
        var course_ = allCoursesUser[ind].studentAndGrade
        var beast = 0
        course_.map(element => {
            console.log(element.grade)
            console.log(beast)
            if (Number(element.grade) > Number(beast)) beast = element.grade
        })
        return beast
    }
    return (
        <>
            <Navbar></Navbar>
            <h1 className="h1_home">{allCoursesUser[ind].CoursesName} Course</h1>
            <div className="allPage">
                <div className="containerUserCourses">
                    <div className="UserCoursesBox">
                        <table className="tableUserCourses">
                            <thead>
                                <tr className="trHeadUserCourses">
                                    <th className="trHeadUserCourses">
                                        student name
                                    </th>
                                    <th className="trHeadUserCourses">
                                        student id
                                    </th>
                                    <th className="trHeadUserCourses">
                                        grade
                                    </th>
                                    <th className="trHeadUserCourses">
                                        delete student
                                    </th>
                                </tr>
                            </thead>
                            {allCoursesUser[ind].studentAndGrade.map(element =>
                                <tr className="trUserCourses">
                                    {console.log(element)}
                                    <th className="thUserCourses"> {element.nameStudent}</th>
                                    <th className="thUserCourses"> {element.id_stu}</th>
                                    <th className="thUserCourses"> {element.grade}</th>
                                    <th className="thUserCourses">
                                        <button className="deleteButton" onClick={() => handleDelete(account.lecturersId, allCoursesUser[ind].Coursesid, element)}>delete</button>
                                    </th>
                                </tr>
                            )}
                            <tr className="trUserInput">
                                <th className="thUserInput">
                                    <input
                                        placeholder="name"
                                        required
                                        className="InputInputUser"
                                        ref={name}
                                        id="1"
                                    />
                                </th>
                                <th className="thUserInput">
                                    <input
                                        placeholder="id"
                                        required
                                        className="InputInputUser"
                                        ref={id}
                                        id="2"
                                    />
                                </th>
                                <th className="thUserInput">
                                    <input
                                        placeholder="grade"
                                        required
                                        minLength="1"
                                        className="InputInputUser"
                                        ref={grade}
                                        id="3"
                                    />
                                </th>
                                <th className="thUserInputButton">
                                    <button className="inputButton" onClick={handleAddStudent} >
                                        add Student
                                    </button>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
/*
 <div className="mainCourse">
                <br />
                <div className="tableStudent">
                    <h1>students</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    student name
                                </th>
                                <th>
                                    student id
                                </th>
                                <th>
                                    grade
                                </th>
                                <th>
                                    delete student
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {allCoursesUser[ind].studentAndGrade.map(element =>
                                <tr>
                                    <th>
                                        {element.nameStudent}
                                    </th>
                                    <th>
                                        {element.id_stu}
                                    </th>
                                    <th>
                                        {element.grade}
                                        {handleAVG(element.grade)}
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(account.lecturersId, allCoursesUser[ind].Coursesid, element)}>delete</button>
                                    </th>
                                </tr>
                            )}
                            <tr>
                                <th>
                                    <input
                                        placeholder="name"
                                        required
                                        className=""
                                        ref={name}
                                        id="1"
                                    />
                                </th>
                                <th>
                                    <input
                                        placeholder="id"
                                        required
                                        className=""
                                        ref={id}
                                        id="2"
                                    />
                                </th>
                                <th>
                                    <input
                                        placeholder="grade"
                                        required
                                        minLength="1"
                                        className=""
                                        ref={grade}
                                        id="3"
                                    />
                                </th>
                                <th>
                                    <button onClick={handleAddStudent} >
                                        add Student
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="Details">
                    <h1>Details Course</h1>
                    <div className="Details-box">
                        Course average:{sumAVG / allCoursesUser[ind].studentAndGrade.length}
                        <br />
                        beast grade : {beastGrade()}
                        <br />
                        Fails: {Fails()}
                    </div>
                </div>
            </div>

*/