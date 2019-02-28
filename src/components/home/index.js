import React, { Component } from "react";
import styled from "styled-components";
import GraphContainer from "../../containers/GraphContainer";
import InputFormContainer from "../../containers/InputFormContainer";
import PointsTableContainer from "../../containers/PointsTableContainer";
import "./index.css";
import Header from "../util/Header";
import Footer from "../util/Footer";
import Cookies from "js-cookie";
const HomeWrapper = styled.div``;
class Home extends Component {
  render() {
    if (Cookies.get("isAuthenticated") === "false") this.props.history.push("/");
    return (
      <div>
        <Header />
        <HomeWrapper>
          <GraphContainer />
          <InputFormContainer />
          <PointsTableContainer />
        </HomeWrapper>
        <Footer />
      </div>
    );
  }
}
export default Home;
