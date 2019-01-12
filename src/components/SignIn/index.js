import React, { Component } from "react";
import styled from "styled-components";
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom';

const SignInWrapper = styled.div`
  display: grid;
  max-width: 300px;
  position: absolute;
  right: 50%;
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
      <SignInWrapper>
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
      </SignInWrapper>
    );
  }
}
export default SignIn;
