import React, { Component } from "react";
import { connect } from "react-redux";
import InputForm from "../components/Home/InputForm";
import { drawFigures } from "../actions/InputFormActions";
class InputFormContainer extends Component {
  render() {
    const { inputForm, drawFigures } = this.props;
    return <InputForm drawFigures={drawFigures} />;
  }
}
const mapStateToProps = store => {
  return {
    inputForm: store.inputForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    drawFigures: radius => dispatch(drawFigures(radius))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);
