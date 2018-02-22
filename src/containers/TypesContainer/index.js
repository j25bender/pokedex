import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTypes } from '../../actions';

class TypesContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={()=> {
          
        }}> BUTTON </button>
      </div>
    );
  }
}

TypesContainer.propTypes = {
  addTypes: PropTypes.object
};

const mapStateToProps = (state) => ({
   types: state.types 
});

const mapDispatchToProps = (dispatch) => ({
  addTypes: () => dispatch(addTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(TypesContainer);
