import React, { Component } from "react";
import styled from "styled-components";
import Header from "../util/Header";
import Footer from "../util/Footer";
import { withRouter } from "react-router-dom";

const SignInWrapper = styled.div`
  display: grid;
  padding-top: 100px;
  height: 75vh;
  grid-template-columns: repeat(6, 1fr [col-start]);
  grid-template-rows: repeat(5, 1fr [col-start]);
  grid-gap: 30px 10px;
  @media all and (min-width: 1192px) {
    /* TODO: add something ? */
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
  }
  @media all and (max-width: 759px) {
  }
`;

const Button = styled.button`
  grid-column: 3 / span 2;
  justify-self: center;
  box-shadow: 0 2px 5px #00000029, 0 3px 6px #0000001a;
  z-index: 2;
  text-decoration: none;
  background: #5bcccc;
  border: 0;
  position: relative;
  cursor: pointer;
  outline: unset;
  font-size: 12pt;
  text-transform: uppercase;
  letter-spacing: 3px;
  min-width: 300px;
  min-height: 57px;

  ::before {
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: #3c8384;
    z-index: -1;
  }

  :hover::before {
    left: 0;
    right: 0;
    opacity: 1;
  }

  :active {
    position: relative;
    bottom: -6px;
  }
  a {
    color: unset;
  }
  @media all and (min-width: 1192px) {
    /* TODO: add something ? */
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
  }
  @media all and (max-width: 759px) {
    grid-column: 2 / span 4;
  }
`;

const Input = styled.input`
  grid-column: 3 / span 2;
  @media all and (min-width: 1192px) {
    /* TODO: add something ? */
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
  }
  @media all and (max-width: 759px) {
    grid-column: 2 / span 4;
  }
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  login = () => {
    if (this.props.login !== "" && this.props.password !== "") {
      this.props.signin(this.props.login, this.props.password);
      this.props.history.push("/");
    } else alert("Enter login and password");
  };

  handlePasswordChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.setPassword(event.target.value);
  }

  handleLoginChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.setLogin(event.target.value);
  }

  render() {
    if (this.props.auth.authIsInProcess === true)
      return <div>Подгружаем данные...</div>;

    return (
      <div>
        <Header />
        <SignInWrapper>
          <Input
            name="login"
            value={this.props.login}
            onChange={this.handleLoginChange}
            placeholder="Login: "
          />
          <Input
            name="password"
            value={this.props.password}
            onChange={this.handlePasswordChange}
            placeholder="Password: "
          />
          <Button onClick={this.login}>Войти</Button>
        </SignInWrapper>
        <Footer />
      </div>
    );
  }
}
export default withRouter(SignIn);
