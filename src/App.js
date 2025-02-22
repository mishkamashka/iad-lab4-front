import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import * as ROUTES from "./routes/routes";
import Home from "./components/home";
import SignInContainer from './containers/AuthContainer'
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styled from "styled-components";
import NotFoundPage from "./components/error/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import SignInRoute from "./routes/SignInRoute";

const AppWrapper = styled.div`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Switch>
            <PrivateRoute exact path={ROUTES.HOME} component={Home} />
            <SignInRoute path={ROUTES.SIGNIN} component={SignInContainer} />
            <Route component={NotFoundPage} />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
