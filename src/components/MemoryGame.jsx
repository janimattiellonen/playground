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
        console.log("oo: "+ JSON.stringify(squares));
        return (
            <div className={MemoryGame.classes}>
                <div className={styles.verticalFlex}>
                    <div className={styles.flexContainer}>
                        <MemorySquare square={squares.get(0)} />
                        <MemorySquare square={squares.get(1)} />
                        <MemorySquare square={squares.get(2)} />
                        <MemorySquare square={squares.get(3)} />
                        <MemorySquare square={squares.get(4)} />
                    </div>
                    <div className={styles.flexContainer}>
                        <MemorySquare square={squares.get(0)} />
                        <MemorySquare square={squares.get(1)} />
                        <MemorySquare square={squares.get(2)} />
                        <MemorySquare square={squares.get(3)} />
                        <MemorySquare square={squares.get(4)} />
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
