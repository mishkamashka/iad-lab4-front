import { DRAW_GRAPH } from "../actions/GraphActions";
import { DRAW_FIGURES } from "../actions/InputFormActions";

const initialState = {
  radius: 0,
  points: [],
  error: ""
};

export function graphReducer(state = initialState, action) {
  switch (action.type) {
    case DRAW_GRAPH:
      return { ...state, radius: action.payload, error: "" };

    case DRAW_FIGURES:
      return { ...state, radius: action.payload, error: "" };

    default:
      return state;
  }
}
