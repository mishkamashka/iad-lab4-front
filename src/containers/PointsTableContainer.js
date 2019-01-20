import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PointsTable from "../components/Home/PointsTable";
import * as pointsTableActions from '../actions/PointsTableActions'

class PointsTableContainer extends Component {
  render() {
    const { pointsTable, pointsTableActions } = this.props;
    return <PointsTable points={pointsTable.points} />;
  }
}
const mapStateToProps = store => {
  return {
    pointsTable: store.pointsTable
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pointsTableActions: bindActionCreators(pointsTableActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointsTableContainer);
