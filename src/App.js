import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Home from "./components/home";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styled from "styled-components";
import NotFoundPage from "./components/error/NotFound";

const AppWrapper = styled.div`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.SIGNUP} component={SignUp} />
            <Route path={ROUTES.SIGNIN} component={SignIn} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
