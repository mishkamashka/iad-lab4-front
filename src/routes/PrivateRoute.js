import React from "react";
import { Route, Redirect } from "react-router-dom";
// Перенести в SIGN_IN, создать контейнер
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/AuthActions";
import { withRouter } from "react-router-dom";
class PrivateRoute extends React.Component {
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
      return <div>Ничего не делаем, аутентифицируемся на сервере</div>;
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
            // <Redirect
            //   to={{
            //     pathname: "/"
            //   }}
            // />
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/signin"
              }}
            />
            // <div>oh, wait</div>
          )
        }
      />
    );
  }
}

// async function getIsAuth() {
//   // The await keyword saves us from having to write a .then() block

//   var isAuthenticated = false;
//   await

//   // The result of the GET request is available in the json variable.
//   // We return it just like in a regular synchronous function.
//   return isAuthenticated;
// }

const mapStateToProps = store => {
  return {
    auth: store.auth,
    isLoading: store.isLoading,
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
  )(PrivateRoute)
);
