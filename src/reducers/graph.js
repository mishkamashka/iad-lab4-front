import { SET_RADIUS } from "../actions/InputFormActions";

const initialState = {
  radius: 0,
  points: [],
  error: ""
};

export function graphReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RADIUS:
      return { ...state, radius: action.payload, error: "" };

    default:
      return state;
  }
}
