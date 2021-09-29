//addStudentToCourse.
export default function addStudentToCourse(data) {
  const axios = require('axios');
  return axios.post('http://localhost:5555/course/addStudentAndGrade',
    {
      "lecturersId": data.lecturersId,
      "Coursesid": data.Coursesid,
      "studentAndGrade": data.studentAndGrade

    }).then(function (response) {
      const Student = response.data;
      return Student;
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

  addStudentToCourse(info).then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })

*/