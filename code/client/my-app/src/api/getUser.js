export default function getUser(user) {
    const axios = require('axios');
    return axios.post('http://localhost:5555/login/login', {
        "password": user.password,
        "email": user.email
    }).then(function (response) {
        const user = {
            email: response.data.email,
            password: response.data.password,
            username: response.data.username,
            lecturersId: response.data.lecturersId,
            img: response.data.img
        };
        return user;
    }).catch(function (error) {
        console.log(error);
    })
}

/*
onst axios = require('axios');
const headers = new Headers();
/*
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('Access-Control-Allow-Credentials', 'Origin, X-Requested-With, Content-Type, Accept');
headers.append('GET', 'POST', 'OPTIONS');
*/
//'http://cros-anywhere.herokuapp.com/
//gal@gmail.com
