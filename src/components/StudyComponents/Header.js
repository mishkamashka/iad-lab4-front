import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  display: grid;
`;
const Group = styled.div`
  grid-column: 1 / span 1;
`;
const Student = styled.div`
  grid-column: 2;
  text-align: right;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Group>P3210</Group>
        <Student>Анисимова Мария</Student>
      </HeaderWrapper>
    );
  }
}
export default Header;
