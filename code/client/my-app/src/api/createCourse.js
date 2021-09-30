export default function createCourse(data) {
  const axios = require('axios');
  console.log(data);
  return axios.post('http://localhost:5555/course/creatCourse',
    {
      "CoursesName": data.CoursesName,
      "Coursesid": data.Coursesid,
      "lecturersIds": data.lecturersIds,
      "studentAndGrade": data.studentAndGrade || [],
      "courseDetails": data.courseDetails

    }).then(function (response) {
      const Course = response.data;
      return Course;
    }).catch(function (error) {
      console.log(error);
    })
}
