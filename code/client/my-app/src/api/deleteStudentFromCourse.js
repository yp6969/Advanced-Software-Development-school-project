//deleteStudentFromCourse
export default function deleteStudentFromCourse(data) {
  const axios = require('axios');
  return axios.post('http://localhost:5555/course/deleteStudentAndGrade',
    {
      "lecturersId": data.lecturersId,
      "Coursesid": data.Coursesid,
      "studentAndGrade": data.student,

    }).then(function (response) {
      const Course = response.data;
      return Course;
    }).catch(function (error) {
      console.log(error);
    })
}
/*
  deleteStudentFromCourse(info).then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })

*/