import { DEV_SERVER } from "../routes/routes";

export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const SET_LOGIN = "SET_LOGIN";
export const SET_PASSWORD = "SET_PASSWORD";

export function signin(username, password) {
  return function(dispatch) {
    const axios = require("axios");
    var bodyFormData = new FormData();
    bodyFormData.set("username", username);
    bodyFormData.set("password", password);

    axios({
      method: "post",
      url: DEV_SERVER + "/login",
      data: bodyFormData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        dispatch({
          type: AUTH_SUCCESS,
          payload: true
        });
        console.log(response.headers);
        //handle success
        console.log(response);
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
    })
  }
}

export function setPassword(password) {
  return dispatch => {
    dispatch({
      type: SET_PASSWORD,
      payload: password
    })
  }
}
