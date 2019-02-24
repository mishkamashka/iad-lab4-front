import { DEV_SERVER } from "../routes/routes";

export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export function signin() {
  return function(dispatch) {
    const axios = require("axios");
    var bodyFormData = new FormData();
    bodyFormData.set("username", "mariia");
    bodyFormData.set("password", "mariia");

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
