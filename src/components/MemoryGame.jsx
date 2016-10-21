import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';
import styles from './MemoryGame.pcss';
import { Map } from 'immutable';

import MemorySquare from './MemorySquare';

class MemoryGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { squares } = this.props;

        return (
            <div className={MemoryGame.classes}>
                <div className={styles.verticalFlex}>

                    <div className={styles.flexContainer}>
                        <div key={1} className={classnames(styles.flexItem)}>
                            <div className={styles.flipper}>
                              <div className={styles.front}>
                                FRONT
                              </div>

                              <div className={styles.back}>
                                BACK
                              </div>
                            </div>
                        </div>
                        <MemorySquare image={squares.get(0).url} />
                        <MemorySquare image={squares.get(1).url} />
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexItem}>1</div>
                        <div key={7} className={classnames(styles.flexItem, styles.flipContainer)}>
                            <div className={styles.flipper}>
                              <div className={styles.front}>
                                FRONT
                              </div>

                              <div className={styles.back}>
                                BACK
                              </div>
                            </div>
                        </div>              
                        <div className={styles.flexItem}>3</div>
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexItem}>1</div>
                        <div className={styles.flexItem}>2</div>
                        <div className={styles.flexItem}>3</div>
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexItem}>1</div>
                        <div className={styles.flexItem}>2</div>
                        <div className={styles.flexItem}>3</div>
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexItem}>1</div>
                        <div className={styles.flexItem}>2</div>
                        <div className={styles.flexItem}>3</div>
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexItem}>1</div>
                        <div className={styles.flexItem}>2</div>
                        <div className={styles.flexItem}>3</div>
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexItem}>1</div>
                        <div className={styles.flexItem}>2</div>
                        <div className={styles.flexItem}>3</div>
                        <div className={styles.flexItem}>4</div>
                        <div className={styles.flexItem}>5</div>
                    </div>
                </div>
            </div>
        );
    }
};

MemoryGame.classes = classnames(
    styles.root
);    

export default MemoryGame;
