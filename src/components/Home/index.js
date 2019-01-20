import React, { Component } from "react";
import styled from "styled-components";
import GraphContainer from "../../containers/GraphContainer";
import InputFormContainer from "../../containers/InputFormContainer";
import PointsTableContainer from "../../containers/PointsTableContainer";
import './index.css'
const HomeWrapper = styled.div``;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <GraphContainer />
        <InputFormContainer />
        <PointsTableContainer />
      </HomeWrapper>
    );
  }
}
export default Home;
