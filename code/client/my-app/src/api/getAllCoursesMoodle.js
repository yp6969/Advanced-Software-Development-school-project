export default function allInfoCourses() {
  const axios = require('axios');
  return axios.get('http://localhost:5555/course/allDataCourses'
  ).then(function (response) {
    const info = response.data;
    return info;
  }).catch(function (error) {
    console.log(error);
  })
}


/*
allInfoCourses().then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })


*/