import { combineReducers } from 'redux'
import { graphReducer } from './graph'
import { inputFormReducer } from './inputForm'

export const rootReducer = combineReducers({
  graph: graphReducer,
  inputForm: inputFormReducer,
})