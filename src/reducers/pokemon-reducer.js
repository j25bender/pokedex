const pokemonReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_POKEMON' :
    return [ ...state, ...action.pokemonToDispatch ]
  default:
    return state;
  }
};

export default pokemonReducer
