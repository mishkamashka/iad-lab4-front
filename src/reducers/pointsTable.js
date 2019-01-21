import {
  FILL_TABLE_SUCCESS,
  CLEAR_TABLE_SUCCESS,
  FILL_TABLE_FAIL,
  CLEAR_TABLE_FAIL
} from "../actions/PointsTableActions";

const initialState = {
  points: [],
  error: ""
};

export function pointsTableReducer(state = initialState, action) {
  switch (action.type) {
    case FILL_TABLE_SUCCESS:
      return { ...state, points: action.payload, error: "" };

    case FILL_TABLE_FAIL:
    return { ...state, error: action.error };

    case CLEAR_TABLE_SUCCESS:
      return { ...state, points: action.payload, error: "" };

    case CLEAR_TABLE_FAIL:
    return { ...state, error: action.error };

    default:
      return state;
  }
}
