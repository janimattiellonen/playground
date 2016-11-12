import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';

export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
 
  }, dispatch)
)(Wrapped);
