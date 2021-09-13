export default function getCourse(data) {
    const axios = require('axios');
    return axios.post('http://localhost:5555/course/getCourse',
        {
            "Coursesid": data.Coursesid,
            "lecturersId": data.lecturersId
        }).then(function (response) {
            const Course = response.data;
            return Course;
        }).catch(function (error) {
            console.log(error);
        })
}
//לדואג לאבטחה חסר בשרת בדיקה מול המרצה
/*
let info = {
    "Coursesid": "341111",
    "lecturersId": "123123123"
  }
  getCourse(info).then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })

*/