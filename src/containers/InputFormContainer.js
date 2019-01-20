import React, { Component } from "react";
import { connect } from "react-redux";
import InputForm from "../components/Home/InputForm";
import { setRadius } from "../actions/InputFormActions";
import { showAlert } from "../actions/InputFormActions";
import { setX, setY } from "../actions/InputFormActions";

class InputFormContainer extends Component {
  render() {
    const { inputForm, setX, setY, setRadius, showAlert } = this.props;
    return (
      <InputForm
        inputForm={inputForm}
        setX={setX}
        setY={setY}
        setRadius={setRadius}
        showAlert={showAlert}
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
    setX: x => dispatch(setX(x)),
    setY: y => dispatch(setY(y)),
    setRadius: radius => dispatch(setRadius(radius)),
    showAlert: message => dispatch(showAlert(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);
