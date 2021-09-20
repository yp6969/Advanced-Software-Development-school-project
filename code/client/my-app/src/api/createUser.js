


export default function createUser(data) {
    const axios = require('axios');
    return axios.post('http://localhost:5555/login/register',
      {
        "username": data.username,
        "password": data.password,
        "email": data.email,
        "lecturersId": data.lecturersId,
        "type":"lecturer",
        "img":""
  
      }).then(function (response) {
        const User = response.data;
        console.log(User);
        return User;
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
  
    createUser(info).then(info => {
      console.log(info);
    }).catch(err => {
      window.alert("err");
    })
  
  */