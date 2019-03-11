import React, { Component } from "react";
import { connect } from "react-redux";
import Graph from "../components/home/Graph";
import { bindActionCreators } from "redux";
import * as graphActions from "../actions/GraphActions";

class GraphContainer extends Component {
  render() {
    const { graph, graphActions } = this.props;
    return (
      <div>
        <Graph
          radius={graph.radius}
          points={graph.points}
          addPoint={graphActions.addPoint}
          getAllPoints={graphActions.getAllPoints}
        />
      </div>
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
