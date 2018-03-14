import { connect } from 'ember-redux';

const stateToComputed = state => ({
  number: state.number
});

const dispatchToActions = dispatch => ({
  add: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)();
