import React, { Component } from "react";
import styled from "styled-components";
import * as ROUTES from "../../routes/routes";
import { Link } from "react-router-dom";
import Header from "../util/Header";
import Footer from "../util/Footer";
import { fakeAuth } from "../../routes/PrivateRoute";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const SignInWrapper = styled.div`
  display: grid;
`;

const SignInBody = styled.div`
  padding-top: 100px;
  height: 80vh;
`;

const Button = styled.button``;

const Input = styled.input``;

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    // this.login = this.login.bind(this);
  }

  login = () => {
    alert('aef')
      // real logic is here
    fakeAuth.authenticate(() => {
      this.props.signin();
      // in this action we are only setting isAuth state in redux ^_^
      // придумать, как отправлять состояния о логине в редакс и его уже там хранить
      this.setState({ redirectToReferrer: true });
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    // 
    if (this.props.isAuthenticated) {
      return <Redirect to={ROUTES.HOME} />;
    }

    return (
      <div>
        <Header />
        <SignInWrapper>
          <SignInBody>
            <Input
              name="login"
              value={this.props.login}
              onChange={this.handleChange}
              placeholder="Login: "
            />
            <Input
              name="password"
              value={this.props.password}
              onChange={this.handleChange}
              placeholder="Password: "
            />
            <Button onClick={this.login}>Войти</Button>
            <Button>
              <Link to={ROUTES.SIGNUP}>Зарегистрироваться</Link>
            </Button>
          </SignInBody>
        </SignInWrapper>
        <Footer />
      </div>
    );
  }
}
export default SignIn;
