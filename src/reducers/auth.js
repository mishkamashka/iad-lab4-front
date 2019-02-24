import { AUTH_SUCCESS, AUTH_FAIL, SET_LOGIN, SET_PASSWORD } from "../actions/AuthActions";
const initialState = {
  isAuthenticated: false,
  login: "",
  password: ""
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload } 
    case AUTH_SUCCESS:
      return { ...state, isAuthenticated: action.payload };
    case AUTH_FAIL:
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
}
