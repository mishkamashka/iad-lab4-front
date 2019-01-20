export const SET_RADIUS = "SET_RADIUS";
export const SET_X = "SET_X";
export const SET_Y = "SET_Y";
export const SHOW_ALERT = "SHOW_ALERT";

export function setX(x) {
  return function(dispatch) {
    dispatch({
      type: SET_X,
      payload: x
    });
  };
}

export function setY(y) {
  return function(dispatch) {
    dispatch({
      type: SET_Y,
      payload: y
    });
  };
}

export function setRadius(radius) {
  return function(dispatch) {
    dispatch({
      type: SET_RADIUS,
      payload: radius
    });
  };
}


export function showAlert(message) {
  return function(dispatch) {
    alert(message);
    dispatch({
      type: SHOW_ALERT,
      payload: message
    });
  };
}
