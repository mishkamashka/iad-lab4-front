import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background: black;
  height: 250px;
  position: relative;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12pt;
  text-align: end;
`;

const FooterBlock = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  color: white;
  text-align: center;
  align-self: center;
  border-right: 1px solid;
  border-left: 1px solid;
  padding-left: 30px;
  padding-right: 30px;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterBlock>
        <p>Have a good day</p>
        <p>/ᐠ・ᆽ・ᐟ\</p>
        </FooterBlock>
      </FooterWrapper>
    );
  }
}
