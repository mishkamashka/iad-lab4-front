import { DEV_SERVER } from "../routes/routes";
import { FILL_TABLE_FAIL, FILL_TABLE_SUCCESS } from "./PointsTableActions";
export const DRAW_GRAPH = "DRAW_GRAPH";
export const GET_ALL_POINTS_SUCCESS = "GET_ALL_POINTS_SUCCESS";
export const GET_ALL_POINTS_FAIL = "GET_ALL_POINTS_FAIL";
export const ADD_POINT_SUCCESS = "ADD_POINT_SUCCESS";
export const ADD_POINT_FAIL = "ADD_POINT_FAIL";

export function addPoint(x, y, r) {
  return dispatch => {
    const axios = require("axios");
    axios
      .post(DEV_SERVER + "/points/", {
          x: x,
          y: y,
          r: r
      })
      .then(function(response) {
        // handle success
          getAllPoints();

      axios
      .get(DEV_SERVER + "/points/all")
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
        console.log(response)
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
      })

      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: ADD_POINT_FAIL,
          error: error.message
        });
        
      })
  }
}

export function getAllPoints() {
  return dispatch => {
    const axios = require("axios");
    axios
      .get(DEV_SERVER + "/points/all")
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
        console.log(response)
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
      })
  };
}

export function drawGraph() {
  return function(dispatch) {
    dispatch({
      type: DRAW_GRAPH
    });
  };
}

