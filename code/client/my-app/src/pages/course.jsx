import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Navbar from "../components/navbar";
import deleteStudentFromCourse from '../api/deleteStudentFromCourse';
import { loadAllUserCourses, incremented } from './../actions/index';
import { useRef } from "react";
import addStudentToCourse from '../api/addStudentToCourse';
import { Link, Redirect } from 'react-router-dom';
export default function Course(props) {
    var sum = 0;
    const id = useRef();
    const grade = useRef();
    var account = useSelector(state => state.account)
    const counter = useSelector(state => state.counter)
    var allCoursesUser = useSelector(state => state.allCoursesUser)
    const dispatch = useDispatch();
    const courseId = props.match.params.id;
    var ind;
    for (let index = 0; index < allCoursesUser.length; index++) {
        if (courseId == allCoursesUser[index].Coursesid) {
            ind = index
        }
    }//אפשר לקצר קוד כפול
    const handleDelete = (lecturersId, Coursesid, student) => {

        console.log("handleDelete");


        deleteStudentFromCourse({ lecturersId, Coursesid, student }).then(info => {
            // window.alert("student delete");
            console.log(info);
        }).catch(err => {
            window.alert("err");
        })
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
        }//אפשר לקצר קוד כפול
        //gal@gmail.com
        allCoursesUser[indexChangeCourse].studentAndGrade = newstudentAndGrade
        dispatch(loadAllUserCourses(allCoursesUser))
        dispatch(incremented(12))
    }

    const handleClick = (e) => {
        console.log("handleClick");
        console.log(id.current.value);
        var info = {
            "lecturersId": account.lecturersId,
            "Coursesid": allCoursesUser[ind].Coursesid,
            "studentAndGrade": {
                "id_stu": id.current.value,
                "grade": grade.current.value
            }
        }
        console.log(allCoursesUser);
        allCoursesUser[ind].studentAndGrade.push({ "id_stu": id.current.value, "grade": grade.current.value })
        console.log(allCoursesUser);
        addStudentToCourse(info).then(info => {
            console.log(info);
            console.log("234");
            dispatch(loadAllUserCourses(allCoursesUser))
            dispatch(incremented(12))


        }).catch(err => {
            window.alert("err");
        })
    }
    const handleAVG = (number) => {
        sum += Number(number)
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="mainCourse">
                <div className="lecturers">
                    <h1>lecturers</h1>

                    {allCoursesUser[ind].lecturersIds.map(element =>
                        <th>
                            {element} |

                        </th>)}
                </div>
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
                                    delete/update
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {allCoursesUser[ind].studentAndGrade.map(element =>
                                <tr>
                                    <th>
                                        gal
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
                                        <button>update</button>
                                    </th>
                                </tr>
                            )}
                            <tr>
                                <input
                                    placeholder="id"
                                    required
                                    className=""
                                    ref={id}
                                    id="1"
                                />
                                <input
                                    placeholder="grade"
                                    required
                                    minLength="1"
                                    className=""
                                    ref={grade}
                                    id="2"
                                />
                                <button onClick={handleClick} >
                                    add
                                </button>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="Details">
                    <h1>Details Course</h1>
                    <div className="Details-box">
                        Course average:{sum / allCoursesUser[ind].studentAndGrade.length}
                        <br />
                        beast grade : --
                        <br />
                        Fails: --
                    </div>
                </div>

            </div>
        </>
    );
}

//להכין כרטיסה לכל קורס 
//כל כרטיסיה מובילה לעמוד חדש המציג את כל התלמידים שבקורס  
//ובעמוד זה יהיה אפשר להוסיף תלמיד למחוק תלמיד
//ןלקבל דוח שמכיל את הפרטים הבאים:
//אפשרות להוציא את כל המתונים לדף אקסל
//ממוצע 
