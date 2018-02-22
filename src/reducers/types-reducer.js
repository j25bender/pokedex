const typesReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TYPES' :
    return [ ...state, action.types]
  default:
    return state;
  }
};

export default typesReducer
