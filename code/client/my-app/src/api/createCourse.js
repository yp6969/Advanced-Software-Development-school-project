export default function createCourse(data) {
    const axios = require('axios');
    return axios.post('http://localhost:5555/course/creatCours',
        {
            "CoursesName": data.CoursesName,
            "Coursesid": data.Coursesid,
            "lecturersIds": data.lecturersIds,
            "studentAndGrade": data.studentAndGrade || []

        }).then(function (response) {
            const Course = response.data;
            return Course;
        }).catch(function (error) {
            console.log(error);
        })
}
/*
 let info = {
    "CoursesName": "PHP",
    "Coursesid": "300982",
    "lecturersIds": ["209338112"],
  }

  createCourse(info).then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })

*/