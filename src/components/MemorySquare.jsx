import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from './MemoryGame.pcss';

class MemorySquare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       this.setState({
            flipped: !this.state.flipped
       });
    }

    render() {

        return (
            <div className={classnames(styles.flexItem, this.state.flipped ? styles.flipped : styles.normal)} onClick={this.handleClick}>
                <div className={styles.flipper}>
                  <div className={styles.front}>
                    FRONT
                  </div>

                  <div className={styles.back}>
                        <img src={this.props.image}/>

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
