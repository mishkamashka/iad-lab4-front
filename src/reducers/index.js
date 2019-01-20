import { combineReducers } from 'redux'
import { graphReducer } from './graph'
import { inputFormReducer } from './inputForm'
import { pointsTableReducer } from './pointsTable';

export const rootReducer = combineReducers({
  graph: graphReducer,
  inputForm: inputFormReducer,
  pointsTable: pointsTableReducer
})