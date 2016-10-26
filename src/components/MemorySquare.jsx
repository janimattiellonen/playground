

import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from './MemoryGame.pcss';

const MemorySquare = props => {
    const { onClick, square } = props;
    const classes = classnames(
        styles.root
    );

    return (
        <div className={classnames(styles.flexItem, square.flipped ? styles.flipped : styles.normal)} 
             onClick={onClick.bind(null, square.id)}>
            <div className={styles.flipper}>
              <div className={styles.front}>
                FRONT
              </div>

              <div className={styles.back}>
                   <img src={square.url}/>
              </div>
            </div>
        </div>
    )
};

export default MemorySquare;
