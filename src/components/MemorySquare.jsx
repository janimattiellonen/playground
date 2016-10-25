import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from './MemoryGame.pcss';

class MemorySquare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped: props.flipped,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       this.setState({
            flipped: true
       });
    }

    render() {
        const { square } = this.props;

        return (
            <div className={classnames(styles.flexItem, this.state.flipped ? styles.flipped : styles.normal)} onClick={this.handleClick}>
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
