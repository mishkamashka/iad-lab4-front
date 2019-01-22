import React, { Component } from "react";
import "./App.css";
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
import styled from 'styled-components'

const AppWrapper = styled.div `
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Header />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Footer />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
