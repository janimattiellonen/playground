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
        const { squares, selectSquare} = this.props;

        return (
            <div className={MemoryGame.classes}>
                <div className={styles.verticalFlex}>
                    <div className={styles.flexContainer}>
                        <MemorySquare square={squares.get(0)} onClick={selectSquare} />
                        <MemorySquare square={squares.get(1)} onClick={selectSquare} />
                        <MemorySquare square={squares.get(2)} onClick={selectSquare} />
                        <MemorySquare square={squares.get(3)} onClick={selectSquare} />
                        <MemorySquare square={squares.get(4)} onClick={selectSquare} />
                    </div>
                    <div className={styles.flexContainer}>
                        <MemorySquare square={squares.get(5)} onClick={selectSquare}/>
                        <MemorySquare square={squares.get(6)} onClick={selectSquare}/>
                        <MemorySquare square={squares.get(7)} onClick={selectSquare}/>
                        <MemorySquare square={squares.get(8)} onClick={selectSquare}/>
                        <MemorySquare square={squares.get(9)} onClick={selectSquare}/>
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
