import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';

import styles from './GameSelection.pcss';

const GameSelection = props => {
  const classes = classnames(
    styles.root
  );

  return (
    <div className={classes}>

      <div className={styles.games}>
        <Link to="sounds">
          <div className={styles.game}>
            <h3>Sounds</h3>
          </div>
        </Link>
      </div>
    </div>
    );
};
/*
Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onMove: React.PropTypes.func.isRequired,
};
*/
export default GameSelection;
