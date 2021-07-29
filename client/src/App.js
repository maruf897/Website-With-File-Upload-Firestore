import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navigationbar from "./components/navbar";
import RegisterUser from "./components/registerUser";
import Login from "./components/login";
import GoruRegistration from "./components/goruRegistration";
import GoruPost from "./components/goruPost";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />

        <div className="d-flex justify-content-center">
          <Link to="/goru-registration">
            <Button variant="primary" className="m-2">
              Add a goru
            </Button>
          </Link>
        </div>

        <Switch>
          <Route path="/registration">
            <RegisterUser />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/goru-registration">
            <GoruRegistration />
          </Route>
        </Switch>
      </Router>
      <GoruPost />
    </div>
  );
}

export default App;
