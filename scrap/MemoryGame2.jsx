import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from './MemoryGame.pcss';

class MemorySquare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped: props.square.flipped,
        };

        this.handleClick = this.handleClick.bind(this);

        console.log("ctor");
    }

    handleClick() {
      const { onClick, square } = this.props;

      onClick(square.id);
      console.log("id: " + square.id);
    }

    render() {
        const { square } = this.props;
        console.log("ss: " + JSON.stringify(square));
        return (
            <div className={classnames(styles.flexItem, this.props.square.flipped ? styles.flipped : styles.normal)} onClick={this.handleClick}>
                <div className={styles.flipper}>
                  <div className={styles.front}>
                    FRONT
                  </div>

                  <div className={styles.back}>
                       <img src={square.url}/>
                  </div>
                </div>
            </div>
        );
    }

};

MemorySquare.classes = classnames(
    styles.root
);

export default MemorySquare;
