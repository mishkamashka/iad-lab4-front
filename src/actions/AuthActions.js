import { DEV_SERVER } from "../routes/routes";
import Cookies from "js-cookie";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export const AUTH_BEGIN = "AUTH_BEGIN";
export const SET_LOGIN = "SET_LOGIN";
export const SET_PASSWORD = "SET_PASSWORD";
export const CHECK_AUTH_BEGIN = "CHECK_AUTH_BEGIN";
export const CHECK_AUTH_SUCCESS = "CHECK_AUTH_SUCCESS";
export const CHECK_AUTH_FAIL = "CHECK_AUTH_FAIL";

export function signin(username, password) {
  return function(dispatch) {
    const axios = require("axios");
    const md5 = require("md5");
    var pass = md5(password);
    dispatch({
      type: AUTH_BEGIN,
      payload: true
    });
    axios({
      method: "post",
      url: DEV_SERVER + "/oauth/token",
      withCridentials: true,
      auth: {
        username:
          "$2a$10$pQFTZF9wGiNj/rJr8vcvC.fzH9ua1yngB5LGmSsNHtYpZGG8gpR2G",
        password: "$2a$10$pQFTZF9wGiNj/rJr8vcvC.fzH9ua1yngB5LGmSsNHtYpZGG8gpR2G"
      },
      params: {
        grant_type: "password",
        username: username,
        password: pass
      },
      config: {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    })
      .then(function(response) {
        dispatch({
          type: AUTH_SUCCESS,
          payload: true
        });
        var access_token = response.data.access_token;
        var expires_in = response.data.expires_in;
        Cookies.set("access_token", access_token, {
          expires: expires_in / 3600
        });
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: AUTH_FAIL,
          payload: false
        });
        console.log(error);
      });
  };
}

export function signout() {
  return function(dispatch) {
    dispatch({
      type: AUTH_FAIL,
      payload: false
    });
  };
}

export function setLogin(login) {
  return dispatch => {
    dispatch({
      type: SET_LOGIN,
      payload: login
    });
  };
}

export function setPassword(password) {
  return dispatch => {
    dispatch({
      type: SET_PASSWORD,
      payload: password
    });
  };
}
export function checkAuth() {
  return dispatch => {
    const axios = require("axios");
    var access_token = Cookies.get("access_token");
    dispatch({
      type: CHECK_AUTH_BEGIN
    });
    axios
      .get(DEV_SERVER + "/check", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(result => {
        dispatch({
          type: CHECK_AUTH_SUCCESS,
          payload: true
        });
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: CHECK_AUTH_FAIL,
          payload: false
        });
        console.log(error);
      });
  };
}