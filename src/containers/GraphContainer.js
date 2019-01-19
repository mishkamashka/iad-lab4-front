import React, { Component } from "react";
import { connect } from "react-redux";
import Graph from "../components/Home/Graph";

class GraphContainer extends Component {
  render() {
    const { graph } = this.props;
    return <Graph radius={graph.radius} />;
  }
}
const mapStateToProps = store => {
  return {
    graph: store.graph
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphContainer);
