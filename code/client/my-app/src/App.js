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
import createCourse from "./api/createCourse";


import Profile from "./pages/profile";
import AllCourses from "./pages/allCourses";
import AllUserCourses from "./pages/allUserCourses";
import Course from "./pages/course";
function App() {
  const user = useSelector(state => state.account)

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
        <Route path="/allCourses" >
          <AllCourses></AllCourses>
        </Route>
        <Route path="/AllUserCourses" >
          <AllUserCourses></AllUserCourses>
        </Route>
        <Route path="/profile" >
          <Profile></Profile>
        </Route>
        <Route path="/course/:id" component={(props) => <Course  {...props}></Course>}>
        </Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </React.Fragment>
  );
}

export default App;



