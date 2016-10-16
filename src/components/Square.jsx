import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';
import Sound from 'react-sound';

import styles from './Square.pcss';

class Square extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playStatus: Sound.status.STOPPED, 
        };
    }

    foo() {
        this.setState({
            playStatus: Sound.status.PLAYING
        })
    }

    render() {

        return (
            <div className={styles.flexItem}>

                <img src={this.props.image} onClick={this.foo.bind(this)}/>


            </div>
        );
    }

};

Square.classes = classnames(
    styles.root
);

export default Square;
