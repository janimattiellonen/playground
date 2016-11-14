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
                <div className={styles.foo}>

                    <div className={styles.game}>
                        <Link to="sounds">
                            <h3>Äänet</h3>
                        </Link>
                    </div>

                    <div className={styles.game}>
                        <Link to="memory">
                            <h3>Muistipeli</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSelection;
