import { combineReducers } from "redux";
import { graphReducer } from "./graph";
import { inputFormReducer } from "./inputForm";
import { pointsTableReducer } from "./pointsTable";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  graph: graphReducer,
  inputForm: inputFormReducer,
  pointsTable: pointsTableReducer,
  auth: authReducer
});
