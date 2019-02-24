import React, { Component } from "react";
import styled from "styled-components";
import * as ROUTES from "../../routes/routes";
import { Link } from "react-router-dom";
import Header from "../util/Header";
import Footer from "../util/Footer";

const SignUpWrapper = styled.div`
  display: grid;
  padding-top: 100px;
  height: calc(100% - 250px);
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

class SignUp extends Component {
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
        <Header/>
        <SignUpWrapper>
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
          <Button onClick={this.handleClick}>Зарегистироваться</Button>
          <Button>
            <Link to={ROUTES.SIGNIN}>Уже зарегистрированы?</Link>
          </Button>
        </SignUpWrapper>
        <Footer/>
      </div>
    );
  }
}
export default SignUp;
