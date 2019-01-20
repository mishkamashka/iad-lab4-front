import React, { Component } from "react";
import { connect } from "react-redux";
import Graph from "../components/Home/Graph";
import { bindActionCreators } from "redux";
import * as graphActions from '../actions/GraphActions'

class GraphContainer extends Component {
  render() {
    const { graph, graphActions } = this.props;
    return (
      <Graph radius={graph.radius} getAllPoints={graphActions.getAllPoints} />
    );
  }
}
const mapStateToProps = store => {
  return {
    graph: store.graph
  };
};

const mapDispatchToProps = dispatch => {
  return {
    graphActions: bindActionCreators(graphActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphContainer);
