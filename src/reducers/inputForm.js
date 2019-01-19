import { DRAW_FIGURES } from "../actions/InputFormActions";

const initialState = {
  radius: 0,
  points: [],
  error: ""
};

export function inputFormReducer(state = initialState, action) {
  switch (action.type) {
    case DRAW_FIGURES:
      return { ...state, radius: action.payload, error: "" };

    default:
      return state;
  }
}
