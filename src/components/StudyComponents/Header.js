import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../static/img/bear.png";
import MediaQuery from "react-responsive";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  background: #5ccccc;
  position: fixed;
  border-bottom: 5px solid #3c8484;
  display: grid;
  grid-template-columns: 46px auto auto auto;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: sans-serif;
  color: black;
  font-size: 12pt;
  z-index: 5;
  @media all and (min-width: 1192px) {
    /* TODO: add something ? */
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
    /* TODO: add something ? */
  }
  @media all and (max-width: 759px) {
    grid-template-columns: auto auto auto;
  }
`;

const HeaderImgBlock = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  height: 100%;
  padding-left: 20px;
  padding-top: 5px;
  @media all and (max-width: 759px) {
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 43px;
  cursor: pointer;
`;

const Variant = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  align-self: center;
  padding-left: 40px;
  @media all and (max-width: 759px) {
    display: none;
  }
`;

const Author = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  align-self: center;
  padding-right: 20px;
  text-align: end;
  @media all and (max-width: 759px) {
    display: none;
  }
`;

const Overlay = styled.div`
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
`;

const OverlayContent = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoVisible: false
    };
    this.showNav = this.showNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  showNav() {
    document.getElementById("about__panel").style.height = "100%";
  }

  closeNav() {
    document.getElementById("about__panel").style.height = "0%";
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderImgBlock>
          <Logo src={logo} onClick={this.showNav} />
        </HeaderImgBlock>
        <Variant>Вариант 28048</Variant>
        <Author>Анисимова Мария, P3210</Author>
        <MediaQuery query="(max-width: 759px)">
          <Overlay id="about__panel" style={{ height: 0 + "%" }}>
            <a
              href="javascript:void(0)"
              class="closebtn"
              onClick={this.closeNav}
            >
              &times;
            </a>
            <OverlayContent>
              <a>Анисимова Мария</a>
              <a>группа P3210</a>
            </OverlayContent>
          </Overlay>
        </MediaQuery>
      </HeaderWrapper>
    );
  }
}
export default Header;
