import {
  SET_RADIUS,
  CHECK_POINT_SUCCESS,
  CLEAR_POINTS_LIST_SUCCESS
} from "../actions/InputFormActions";

const initialState = {
  radius: 0,
  points: [],
  error: ""
};

export function graphReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_POINT_SUCCESS:
      return { ...state, points: [...state.points, action.payload], error: "" };

    case CLEAR_POINTS_LIST_SUCCESS:
      return { ...state, points: action.payload, error: "" };

    case SET_RADIUS:
      return { ...state, radius: action.payload, error: "" };

    default:
      return state;
  }
}
