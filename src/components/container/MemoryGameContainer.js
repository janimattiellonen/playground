import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../MemoryGame';
import {
  receiveMemorySquares
} from '../../ducks/memory-game';

export default connect(
  state => ({
    squares: state.memoryGame.get('memorySquares'),
  }),
  dispatch => bindActionCreators({
    receiveMemorySquares,
  }, dispatch)
)(Wrapped);
