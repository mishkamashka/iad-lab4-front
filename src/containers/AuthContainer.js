import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/AuthActions";
import SignIn from "../components/signin/index";


class AuthContainer extends Component {
  render() {
    const { auth, authActions } = this.props;
    return (
      <SignIn
        login={auth.login}
        password={auth.password}
        signin={authActions.signin}
        isAuthenticated={auth.isAuthenticated}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    auth: store.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);

