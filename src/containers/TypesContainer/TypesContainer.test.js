import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTypes, addPokemon } from '../../actions';
import TypesContainer from './index';
import { shallow } from 'enzyme';


describe('TypesContainer Tests', () => {
  const mocktypesToDispatch = [{id: "1", name: "normal", pokemon: Array(5)}, {id: "2", name: "fighting", pokemon: Array(5)}]
  const mockpokemonToDispatch = [ {name: "gastly", id: "92", type: "8", weight: 1, sprites: 'img'}, {name: "haunter", id: "93", type: "8", weight: 1, sprites: 'img'} ]
  const mockHandleClick = jest.fn();

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      typesToDispatch: mocktypesToDispatch
    })
  }))

  let wrapper

  beforeEach(() => {
    const wrapper = shallow(<TypesContainer)
  })
})