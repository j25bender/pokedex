import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTypes, addPokemon } from '../../actions';
import TypesContainer from './index';
import { mapStateToProps, mapDispatchToProps } from './index';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from 'redux-mock-store';

describe('TypesContainer Tests', () => {
  const typesReducerMock = [{id: "1", name: "normal", pokemon: Array(5)}, {id: "2", name: "fighting", pokemon: Array(5)}]
  const pokemonReducerMock = [ {name: "gastly", id: "92", type: "8", weight: 1, sprites: 'img'}, {name: "haunter", id: "93", type: "8", weight: 1, sprites: 'img'} ]
  const mockHandleClick = jest.fn();
  
  const initialState = {
    storeTypes: typesReducerMock,
    storePokemon: pokemonReducerMock
  }
  const mockStore = configureStore()
  let store, wrapper 

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<TypesContainer store={ store }/>)
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        typesToDispatch: typesReducerMock
      })
    }))
  })

  it('should match snapshot', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  })

  it('addTypes should return correct object', () => {
    expect(addTypes(typesReducerMock)).resolves.toEqual({"type": "ADD_TYPES", "typesToDispatch": [{"id": "1", "name": "normal", "pokemon": [undefined, undefined, undefined, undefined, undefined]}, {"id": "2", "name": "fighting", "pokemon": [undefined, undefined, undefined, undefined, undefined]}]})
  })

  it('addPokemon should return correct object', () => {
    expect(addPokemon(pokemonReducerMock)).resolves.toEqual({"pokemonToDispatch": [{"id": "92", "name": "gastly", "sprites": "img", "type": "8", "weight": 1}, {"id": "93", "name": "haunter", "sprites": "img", "type": "8", "weight": 1}], "type": "ADD_POKEMON"})
  })
})
