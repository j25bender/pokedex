import React, { Component } from 'react';
import './types-container.css';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTypes, addPokemon } from '../../actions';

export class TypesContainer extends Component {
  constructor() {
    super()

    this.state = {
      types: [],
      pokemonCategory: []
    }
  }

  handleClick(e) {
    const { storePokemon } = this.props
    e.target.className === "card" ? e.target.className = "active" : e.target.className = "card";
    const pokemonCategory = storePokemon.filter( pokemon => pokemon.type === e.target.id ? pokemon : null )
    this.setState({ pokemonCategory });
  }

  async componentDidMount() {
    const fetchedTypes = await fetch('http://localhost:3001/types');
    const typesToDispatch = await fetchedTypes.json();
    const fetchedPokemon = await fetch('http://localhost:3001/pokemon');
    const pokemonToDispatch = await fetchedPokemon.json();
    this.props.addPokemon(pokemonToDispatch);
    this.props.addTypes(typesToDispatch);
    this.setState({ 
      types: typesToDispatch,
      pokemon: pokemonToDispatch
     })
  }
  
  render(props) {
    const { storeTypes } = this.props
    const { pokemonCategory } = this.state
    console.log(pokemonCategory)
    const renderPokemon = pokemonCategory.map( (poke, key) => <div className="pokeCategory" key={ poke.id } ><h6>{ poke.name }</h6><h6>{ poke.type }</h6><h6>{ poke.weight }</h6><img src={ poke.sprites.front_default} /></div>)

    const renderCards = storeTypes.map( (type, key) => <div id={ type.id } className="card" onClick={ (e) => this.handleClick(e) } key={ type.id } >{ type.name }<div>{ renderPokemon }</div></div>)
    
    const loading = !this.props ? <div className="loadScreen"></div> : null;

    return (
      <div className="types-container">
        {loading} 
        {renderCards}
      </div>
    );
  }
}

TypesContainer.propTypes = {
  addTypes: PropTypes.func
};

export const mapStateToProps = (state) => ({
   storeTypes: state.storeTypes,
   storePokemon: state.storePokemon 
});

export const mapDispatchToProps = (dispatch) => ({
  addTypes: (typesToDispatch) => dispatch(addTypes(typesToDispatch)),
  addPokemon: (pokemonToDispatch) => dispatch(addPokemon(pokemonToDispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesContainer);
