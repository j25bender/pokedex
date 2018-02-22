import { combineReducers } from 'redux';
import typesReducer from './types-reducer';
import pokemonReducer from './pokemon-reducer';

const rootReducer = combineReducers({
  storeTypes: typesReducer,
  storePokemon: pokemonReducer
})

export default rootReducer
