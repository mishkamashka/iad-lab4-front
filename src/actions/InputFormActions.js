export const SET_RADIUS = "SET_RADIUS";
export const SET_X = "SET_X";
export const SET_Y = "SET_Y";
export const SHOW_ALERT = "SHOW_ALERT";
export const CHECK_POINT_SUCCESS = "CHECK_POINT_SUCCESS";
export const CLEAR_POINTS_LIST_SUCCESS = "CLEAR_POINTS_LIST_SUCCESS";

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
    dispatch({
      type: CLEAR_POINTS_LIST_SUCCESS,
      payload: []
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
