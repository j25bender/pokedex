import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTypes } from '../../actions';

class TypesContainer extends Component {
  constructor() {
    super()

    this.state = {
      types: []
    }
  }

  async componentDidMount() {
    const fetchedTypes = await fetch('http://localhost:3001/types');
    const typesToDispatch = await fetchedTypes.json();
    this.props.addTypes(typesToDispatch);
    this.setState({ types: typesToDispatch })
  }

  render(props) {
    const { storeTypes } = this.props
    console.log('storetypes',storeTypes)
      const renderCards = storeTypes.map( (type, key) => console.log(type ))
    
    return (
      <div>
        <button onClick={()=> {
          
        }}> BUTTON </button>
      </div>
    );
  }
}

TypesContainer.propTypes = {
  addTypes: PropTypes.func
};

export const mapStateToProps = (state) => ({
   storeTypes: state.storeTypes 
});

export const mapDispatchToProps = (dispatch) => ({
  addTypes: (typesToDispatch) => dispatch(addTypes(typesToDispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesContainer);
