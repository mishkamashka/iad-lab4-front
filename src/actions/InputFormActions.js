import { DEV_SERVER } from "../routes/routes";
import {
  CLEAR_TABLE_SUCCESS,
  CLEAR_TABLE_FAIL,
  UPDATE_TABLE_RADIUS_SUCCESS,
  UPDATE_TABLE_RADIUS_FAIL
} from "./PointsTableActions";
import {
  ADD_POINT_FAIL,
  GET_ALL_POINTS_FAIL,
  GET_ALL_POINTS_SUCCESS
} from "./GraphActions";
import { FILL_TABLE_FAIL, FILL_TABLE_SUCCESS } from "./PointsTableActions";
import Cookies from "js-cookie";

export const SET_RADIUS = "SET_RADIUS";
export const SET_X = "SET_X";
export const SET_Y = "SET_Y";
export const SHOW_ALERT = "SHOW_ALERT";
export const CHECK_POINT_SUCCESS = "CHECK_POINT_SUCCESS";
export const CLEAR_POINTS_LIST_SUCCESS = "CLEAR_POINTS_LIST_SUCCESS";
export const CLEAR_POINTS_LIST_FAIL = "CLEAR_POINTS_LIST_FAIL";

export function checkFormPoint(x, y, r) {
  return dispatch => {
    const axios = require("axios");
    var access_token = Cookies.get("access_token");
    axios //TODO another request for putting valid "inArea" result in table
      .post(
        DEV_SERVER + "/points/",
        { x: x, y: y, r: r },
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      .then(function(response) {
        //success
        axios
          .get(DEV_SERVER + "/points/all", {
            headers: { Authorization: `Bearer ${access_token}` }
          })
          .then(function(response) {
            // handle success
            dispatch({
              type: GET_ALL_POINTS_SUCCESS,
              payload: response.data
            });
            dispatch({
              type: FILL_TABLE_SUCCESS,
              payload: response.data
            });
            console.log(response);
          })
          .catch(function(error) {
            // handle error
            dispatch({
              type: GET_ALL_POINTS_FAIL,
              error: error.message
            });
            dispatch({
              type: FILL_TABLE_FAIL,
              error: error.message
            });
          });
        // this.props.getAllPoints();
      })
      .catch(function(error) {
        dispatch({
          type: ADD_POINT_FAIL,
          error: error.message
        });
      });
  };
}

export function clearPointsList() {
  return dispatch => {
    const axios = require("axios");
    var access_token = Cookies.get("access_token");
    axios
      .get(DEV_SERVER + "/points/deleteAll", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(function(response) {
        // handle success
        dispatch({
          type: CLEAR_POINTS_LIST_SUCCESS,
          payload: []
        });
        dispatch({
          type: CLEAR_TABLE_SUCCESS,
          payload: []
        });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: CLEAR_POINTS_LIST_FAIL,
          error: error.message
        });
        dispatch({
          type: CLEAR_TABLE_FAIL,
          error: error.message
        });
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
}

export function setX(x) {
  return dispatch => {
    dispatch({
      type: SET_X,
      payload: x
    });
  };
}

export function setY(y) {
  return dispatch => {
    dispatch({
      type: SET_Y,
      payload: y
    });
  };
}

export function setRadius(radius) {
  return dispatch => {
    dispatch({
      type: SET_RADIUS,
      payload: radius
    });
    const axios = require("axios");
    var access_token = Cookies.get("access_token");
    axios
      .put( DEV_SERVER + "/points/" + radius.value, {}, {headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(function(response) {
        // handle success
        // getAllPoints();

        const axios = require("axios");
        axios
          .get(DEV_SERVER + "/points/all", {
            headers: { Authorization: `Bearer ${access_token}` }
          })
          .then(function(response) {
            // handle success
            dispatch({
              type: GET_ALL_POINTS_SUCCESS,
              payload: response.data
            });
            dispatch({
              type: FILL_TABLE_SUCCESS,
              payload: response.data
            });
            console.log(response);
          })
          .catch(function(error) {
            // handle error
            dispatch({
              type: GET_ALL_POINTS_FAIL,
              error: error.message
            });
            dispatch({
              type: FILL_TABLE_FAIL,
              error: error.message
            });
          });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: UPDATE_TABLE_RADIUS_FAIL,
          error: error.message
        });
      });
  };
}

export function getAllPoints() {
  return dispatch => {
    console.log("get points");
    var access_token = Cookies.get("access_token");
    const axios = require("axios");
    axios
      .get(DEV_SERVER + "/points/all", {
        headers: { Authorization: `Bearer ${access_token}` }
      })
      .then(function(response) {
        // handle success
        dispatch({
          type: GET_ALL_POINTS_SUCCESS,
          payload: response.data
        });
        dispatch({
          type: FILL_TABLE_SUCCESS,
          payload: response.data
        });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: GET_ALL_POINTS_FAIL,
          error: error.message
        });
        dispatch({
          type: FILL_TABLE_FAIL,
          error: error.message
        });
      });
  };
}

// TODO: remove this unused function
export function showAlert(message) {
  return dispatch => {
    alert(message);
    dispatch({
      type: SHOW_ALERT,
      payload: message
    });
  };
}
