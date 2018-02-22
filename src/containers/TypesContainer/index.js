import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';

class TypesContainer extends Component {

  render() {
    return (
      <div>
        <button onClick={()=> {
          this.props.fakeAction()
          alert('FAKE')
        }}> FAKE </button>
      </div>
    );
  }
}

TypesContainer.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ fakeAction:
  () => dispatch(fakeAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(TypesContainer);
