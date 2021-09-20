export default function getAllUserCourses(data) {
  const axios = require('axios');
  return axios.post('http://localhost:5555/course/allUserCourses',
    {
      "lecturersId": data.lecturersId

    }).then(function (response) {
      const Course = response.data;
      return Course;
    }).catch(function (error) {
      console.log(error);
    })
}
/*
 let info = {
    "lecturersId":"209338112"
  }

  getAllUserCourses(info).then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })

*/

































