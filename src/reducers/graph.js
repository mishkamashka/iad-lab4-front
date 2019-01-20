import {
  SET_RADIUS,
  CHECK_POINT_SUCCESS,
  CLEAR_POINTS_LIST_SUCCESS,
  CLEAR_POINTS_LIST_FAIL
} from "../actions/InputFormActions";

import {
  GET_ALL_POINTS_SUCCESS,
  GET_ALL_POINTS_FAIL
} from "../actions/GraphActions";

const initialState = {
  radius: 0,
  points: [],
  error: ""
};

export function graphReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POINTS_SUCCESS:
      return { ...state, points: action.payload, error: "" };

    case GET_ALL_POINTS_FAIL:
      return { ...state, error: action.error };

    case CHECK_POINT_SUCCESS:
      return { ...state, points: [...state.points, action.payload], error: "" };

    case CLEAR_POINTS_LIST_SUCCESS:
      return { ...state, points: action.payload, error: "" };

    case CLEAR_POINTS_LIST_FAIL:
      return { ...state, error: action.error };

    case SET_RADIUS:
      return { ...state, radius: action.payload, error: "" };

    default:
      return state;
  }
}
