import React, { Component } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import Graph from "./Graph";

const HomeWrapper = styled.div`
    
`;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <InputForm />
      </HomeWrapper>
    );
  }
}
export default Home;
