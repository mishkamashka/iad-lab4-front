import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PointsTable from "../components/home/PointsTable";
import * as pointsTableActions from '../actions/PointsTableActions'

class PointsTableContainer extends Component {
  render() {
    const { pointsTable, inputForm } = this.props;
    return <PointsTable points={pointsTable.points} radius={inputForm.radius} />;
  }
}
const mapStateToProps = store => {
  return {
    pointsTable: store.pointsTable,
    inputForm: store.inputForm
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
