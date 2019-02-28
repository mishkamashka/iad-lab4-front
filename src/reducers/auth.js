import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_BEGIN,
  SET_LOGIN,
  SET_PASSWORD
} from "../actions/AuthActions";
const initialState = {
  auth: false,
  isLoading: false,
  error: null,
  login: "",
  password: ""
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case AUTH_BEGIN:
      return { ...state, isLoading: true, error: null };
    case AUTH_SUCCESS:
      return { ...state, isLoading: false, auth: action.payload };
    case AUTH_FAIL:
      return { ...state, isLoading: false, auth: action.payload };
    default:
      return state;
  }
}
