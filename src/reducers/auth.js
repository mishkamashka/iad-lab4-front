import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_BEGIN,
  SET_LOGIN,
  SET_PASSWORD,
  CHECK_AUTH_BEGIN,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAIL
} from "../actions/AuthActions";
const initialState = {
  auth: null,
  isLoading: false,
  authIsInProcess: false,
  authIsInChecking: false,
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
      return { ...state, authIsInProcess: true, error: null };
    case AUTH_SUCCESS:
      return {
        ...state,
        authIsInProcess: false,
        login: "",
        password: "",
        auth: action.payload
      };
    case AUTH_FAIL:
      return { ...state, authIsInProcess: false, auth: action.payload };
    case CHECK_AUTH_BEGIN:
      //TODO: check this return
      return { ...state, authIsInChecking: true };
    case CHECK_AUTH_SUCCESS:
      //TODO: check this return
      return { ...state, authIsInChecking: false, auth: action.payload };
    //TODO: check this return
    case CHECK_AUTH_FAIL:
      return { ...state, authIsInChecking: false, auth: action.payload };
    default:
      return state;
  }
}
