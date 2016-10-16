import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';


import styles from './Square.pcss';

const Square = props => {
  const classes = classnames(
    styles.root
  );

  return (
    <div className={classes}>

        <img src={props.image} />
    </div>

    );
};

export default Square;
