import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "./components/StudyComponents/Header";
import Footer from "./components/StudyComponents/Footer";

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
          <Header />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
