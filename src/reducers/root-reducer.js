import { combineReducers } from 'redux'
import typesReducer from './types-reducer'

const rootReducer = combineReducers({
  storeTypes: typesReducer
})

export default rootReducer
