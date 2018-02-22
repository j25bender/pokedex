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
    console.log(this.state)
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
   types: state.types 
});

export const mapDispatchToProps = (dispatch) => ({
  addTypes: (typesToDispatch) => dispatch(addTypes(typesToDispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesContainer);
