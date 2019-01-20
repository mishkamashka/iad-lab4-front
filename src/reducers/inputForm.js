import { DRAW_FIGURES } from "../actions/InputFormActions";

const initialState = {
  radius: 0,
  x: 0,
  y: 0,
  error: ""
};

export function inputFormReducer(state = initialState, action) {
  switch (action.type) {
    // Duplicate, because we should set radius
    case DRAW_FIGURES:
      return { ...state, radius: action.payload, error: "" };

    default:
      return state;
  }
}
