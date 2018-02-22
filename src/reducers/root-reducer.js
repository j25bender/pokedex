import { combineReducers } from 'redux'
import typesReducer from './types-reducer'

const rootReducer = combineReducers({
  types: typesReducer
})

export default rootReducer
