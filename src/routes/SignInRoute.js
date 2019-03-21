import React from "react";
import { Route, Redirect } from "react-router-dom";
// Перенести в SIGN_IN, создать контейнер
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/AuthActions";
import { withRouter } from "react-router-dom";
class SignInRoute extends React.Component {
  componentWillMount() {
    if (this.props.auth.authIsInProcess !== true) {
      this.props.authActions.checkAuth();
    }
  }

  render() {
    var Component = this.props.component;

    const { auth, error } = this.props;

    if (auth.error) {
      return <p>{error.message}</p>;
    }

    if (auth.authIsInProcess) {
      return <div>Идет аутентификация...</div>;
    }

    if (auth.authIsInChecking) {
      return <p>Проверяем аутентификацию...</p>;
    }

    if (auth.auth === null) {
      return <div>oh, wait...</div>;
    }

    return (
      <Route
        render={props =>
          auth.auth ? (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    auth: store.auth,
    error: store.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignInRoute)
);
