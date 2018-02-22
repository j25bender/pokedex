import typesReducer from './types-reducer';
import pokemonReducer from './pokemon-reducer';

describe('reducer tests', () => {

  it('typesReducer should return initial state', () => {
    expect(typesReducer(undefined, {})).toEqual([])
  })

  it('pokemonReducer should return initial state', () => {
    expect(pokemonReducer(undefined, {})).toEqual([])
  })

  it('pokemonReducer should update state when action ', () => {
    const mockPokemonToDispatch = [ {name: "gastly", id: "92", type: "8", weight: 1, sprites: 'img'}, {name: "haunter", id: "93", type: "8", weight: 1, sprites: 'img'} ]
    const pokemonAction = {
      type: 'ADD_POKEMON',
      pokemonToDispatch: mockPokemonToDispatch
    }
    expect(pokemonReducer(undefined, pokemonAction)).toEqual(mockPokemonToDispatch)
  })

  it('typesReducer should update state when action ', () => {
    const mockTypesToDispatch = [ 'normal', 'fighting', 'flying' ]
    const typesActions = {
      type: 'ADD_TYPES',
      typesToDispatch: mockTypesToDispatch
    }
    expect(typesReducer(undefined, typesActions)).toEqual(mockTypesToDispatch)
  })
})