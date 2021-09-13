import Navbar from "./components/navbar";
import Login from './pages/Login'
import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import NotFound from './pages/notFound';
import { useSelector, useDispatch } from 'react-redux';

import getCourse from "./api/getCourse";
import allInfoCourses from "./api/getAllCoursesMoodle";
function App() {
  const user = useSelector(state => state.account)

  let info = {
    "Coursesid": "341111",
    "lecturersId": "123123123"
  }
  allInfoCourses().then(info => {
    console.log(info);
  }).catch(err => {
    window.alert("err");
  })



  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register" >
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </React.Fragment>
  );
}

export default App;



