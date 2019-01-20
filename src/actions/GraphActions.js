import { axios } from "axios";
import { DEV_SERVER } from "../constants/routes";
export const DRAW_GRAPH = "DRAW_GRAPH";
export const GET_ALL_POINTS_SUCCESS = "GET_ALL_POINTS_SUCCESS";
export const GET_ALL_POINTS_FAIL = "GET_ALL_POINTS_FAIL";

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
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        dispatch({
          type: GET_ALL_POINTS_FAIL,
          error: error.message
        });
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
}

export function drawGraph() {
  return function(dispatch) {
    dispatch({
      type: DRAW_GRAPH
    });
  };
}
