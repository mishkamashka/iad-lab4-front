import React, { Component } from "react";
import styled from "styled-components";
import GraphContainer from "../../containers/GraphContainer";
import InputFormContainer from "../../containers/InputFormContainer";

const HomeWrapper = styled.div``;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <GraphContainer />
        <InputFormContainer />
      </HomeWrapper>
    );
  }
}
export default Home;
