import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

const AppWrapper = styled.div`
  background: red;
  width: 100px;
  height: 100px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
