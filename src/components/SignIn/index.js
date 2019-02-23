import React, { Component } from "react";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import Header from "../StudyComponents/Header";
import Footer from "../StudyComponents/Footer";

const SignInWrapper = styled.div`
  display: grid;
`;

const SignInBody = styled.div`
  background: red;
`;

const Button = styled.button``;

const Input = styled.input``;

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(event) {
    alert(this.state.password + " " + this.state.login);
  }

  render() {
    return (
      <div>
        <Header />
        <SignInWrapper>
          <SignInBody>
            <Input
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
              placeholder="Login: "
            />
            <Input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password: "
            />
            <Button onClick={this.handleClick}>Войти</Button>
            <Button>
              <Link to={ROUTES.SIGNUP}>О нас</Link>
            </Button>
          </SignInBody>
        </SignInWrapper>
        <Footer/>
      </div>
    );
  }
}
export default SignIn;
