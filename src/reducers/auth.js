import { AUTH_SUCCESS, AUTH_FAIL } from "../actions/AuthActions";
const initialState = {
  isAuthenticated: false
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuthenticated: action.payload };
    case AUTH_FAIL:
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
}
