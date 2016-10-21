import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../MemoryGame';
import {
  receiveSquares
} from '../../ducks/soundGame';

export default connect(
  state => ({
    squares: state.soundGame.get('squares'),
  }),
  dispatch => bindActionCreators({
    receiveSquares,
  }, dispatch)
)(Wrapped);
