import React, { Component } from "react";
import { connect } from "react-redux";
import InputForm from "../components/Home/InputForm";
import * as inputFormActions from "../actions/InputFormActions";
import { bindActionCreators } from "redux";
import * as  graphActions from "../actions/GraphActions"

class InputFormContainer extends Component {
  render() {
    const { inputForm, inputFormActions, graphActions } = this.props;
    return (
      <InputForm
        inputForm={inputForm}
        setX={inputFormActions.setX}
        setY={inputFormActions.setY}
        setRadius={inputFormActions.setRadius}
        showAlert={inputFormActions.showAlert}
        checkFormPoint={inputFormActions.checkFormPoint}
        clearPointsList={inputFormActions.clearPointsList}
        getAllPoints = {graphActions.getAllPoints}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    inputForm: store.inputForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputFormActions: bindActionCreators(inputFormActions, dispatch),
    graphActions: bindActionCreators(graphActions, dispatch)
    // setX: x => dispatch(setX(x)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);
