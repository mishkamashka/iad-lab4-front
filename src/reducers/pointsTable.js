import {
  FILL_TABLE_SUCCESS,
  CLEAR_TABLE_SUCCESS,
  FILL_TABLE_FAIL,
  CLEAR_TABLE_FAIL
} from "../actions/PointsTableActions";
import { ADD_POINT_SUCCESS, ADD_POINT_FAIL } from "../actions/GraphActions";

const initialState = {
  points: [],
  error: ""
};

export function pointsTableReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT_SUCCESS:
      return { ...state, points: [...state.points, action.payload], error: "" };

    case ADD_POINT_FAIL:
      return { ...state, error: action.error };

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
