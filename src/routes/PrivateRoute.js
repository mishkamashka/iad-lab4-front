import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// Перенести в SIGN_IN, создать контейнер
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/AuthActions";
import Cookies from "js-cookie";
import { DEV_SERVER } from "../routes/routes";
import {withRouter} from 'react-router-dom'
class PrivateRoute extends React.Component {
  
  componentWillMount()  {
    const axios = require("axios");
    var access_token = Cookies.get("access_token");
    axios
      .get(DEV_SERVER + "/check", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(response => {
        Cookies.set('isAuthenticated', true)
        // this.setState({ isAuthenticated: true });
        //this.setState({name: response.data.name});
      })
      .catch(error => {
        Cookies.set('isAuthenticated', false)
        // this.setState({
        //   isAuthenticated: false
        // }); // handle error
      });
  }

  render() {
    var Component = this.props.component;
    var test = Cookies.get("isAuthenticated");
    // if (test === true) {
    //   return (
    //     <Component/>
    //   );
    // } else
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/signin"
    //       }}
    //     />
    //   );
    return (
      <Route
        render={props =>
          Cookies.get("isAuthenticated") === 'true' ? (
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

// IT doesn't work as expected!
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute));

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
