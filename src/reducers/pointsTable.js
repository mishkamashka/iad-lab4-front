import {
  FILL_TABLE_SUCCESS,
  CLEAR_TABLE_SUCCESS,
  FILL_TABLE_FAIL,
  CLEAR_TABLE_FAIL,
  UPDATE_TABLE_RADIUS_SUCCESS,
  UPDATE_TABLE_RADIUS_FAIL
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

    case UPDATE_TABLE_RADIUS_SUCCESS:
      var newArray = state.points.slice();
      for (var i = 0; i < newArray.length; i++) {
        newArray[i].r = action.payload.value;
        newArray[i].inArea = checkIsInArea(newArray[i].x,newArray[i].y, newArray[i].r)
      }
      return { ...state, points: newArray, error: "" };

    case UPDATE_TABLE_RADIUS_FAIL:
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

function checkIsInArea(x, y, r) {
    return ((x >= 0 && x <= r / 2 && y >= 0 && y <= r) ||
            (x <= 0 && y <= 0 && y >= x - r / 2) ||
            (x <= 0 && y >= 0 && x * x + y * y <= r * r));
}