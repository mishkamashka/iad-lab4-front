import React, { Component } from "react";
import { connect } from "react-redux";
import InputForm from "../components/Home/InputForm";

class InputFormContainer extends Component {
  render() {
    return <InputForm />;
  }
}
const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormContainer);
