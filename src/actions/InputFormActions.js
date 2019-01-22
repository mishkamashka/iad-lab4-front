import { DEV_SERVER } from "../constants/routes";
import { CLEAR_TABLE_SUCCESS, CLEAR_TABLE_FAIL, UPDATE_TABLE_RADIUS_SUCCESS, UPDATE_TABLE_RADIUS_FAIL } from "./PointsTableActions";

export const SET_RADIUS = "SET_RADIUS";
export const SET_X = "SET_X";
export const SET_Y = "SET_Y";
export const SHOW_ALERT = "SHOW_ALERT";
export const CHECK_POINT_SUCCESS = "CHECK_POINT_SUCCESS";
export const CLEAR_POINTS_LIST_SUCCESS = "CLEAR_POINTS_LIST_SUCCESS";
export const CLEAR_POINTS_LIST_FAIL = "CLEAR_POINTS_LIST_FAIL";

export function checkFormPoint(x, y, r) {
  return dispatch => {
    dispatch({
      type: CHECK_POINT_SUCCESS,
      payload: { x: x, y: y, r: r, status: "success" }
    });
  };
}

export function clearPointsList() {
  return dispatch => {
    const axios = require("axios");
    axios
      .get(DEV_SERVER + "/points/deleteAll")
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
    // TODO: ОБНОВЛЯТЬ ТОЧКИ И НА ГРАФИКЕ!!!! запросом?
    // ГРАФ УЖЕ ОБНОВЛЯЕТСЯ С НОВЫМИ ТОЧКАМИ??? КАК ЭТО ПРОИСХОДИТ??????????????
    const axios = require("axios");
    axios
      .put(DEV_SERVER + "/points/" + radius.value)
      .then(function(response) {
        // handle success
        dispatch({
          type: UPDATE_TABLE_RADIUS_SUCCESS,
          payload: radius
        });
        console.log(response)
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: UPDATE_TABLE_RADIUS_FAIL,
          error: error.message
        });
      })
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
