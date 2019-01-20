import { SET_RADIUS } from "../actions/InputFormActions";
import { SHOW_ALERT } from "../actions/InputFormActions";
import { SET_X } from "../actions/InputFormActions";
import { SET_Y } from "../actions/InputFormActions";

const initialState = {
  radius: 0,
  x: 0,
  y: 0,
  error: ""
};

export function inputFormReducer(state = initialState, action) {
  switch (action.type) {
    // Duplicate, because we should set radius
    case SET_RADIUS:
      return { ...state, radius: action.payload, error: "" };
    case SET_X:
      return { ...state, x: action.payload, error: "" };
    case SET_Y:
      return { ...state, y: action.payload, error: "" };
    case SHOW_ALERT:
      return { ...state, message: action.payload, error: "" };
    default:
      return state;
  }
}
