import { addTypes, addPokemon } from './index';

describe('action tests', () => {

  it('addTypes action should return an object w type ADD_TYPES and payload typesToDispatch' , () => {
    const mocktypesToDispatch = [ 'normal', 'fighting', 'flying' ] 
    const expectedActions = {
      type: 'ADD_TYPES',
      typesToDispatch: [ 'normal', 'fighting', 'flying' ]
    }
    expect(addTypes(mocktypesToDispatch)).toEqual(expectedActions);
  })

  it('addPokemon action should return an object w type ADD_POKEMON and payload pokemonToDispatch' , () => {
    const mockpokemonToDispatch = [ {name: "gastly", id: "92", type: "8", weight: 1, sprites: 'img'}, {name: "haunter", id: "93", type: "8", weight: 1, sprites: 'img'} ] 
    const expectedActions = {
      type: 'ADD_POKEMON',
      pokemonToDispatch: [ {name: "gastly", id: "92", type: "8", weight: 1, sprites: 'img'}, {name: "haunter", id: "93", type: "8", weight: 1, sprites: 'img'} ]
    }
    expect(addPokemon(mockpokemonToDispatch)).toEqual(expectedActions);
  })

})  
