import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';
import Square from './Square';


import styles from './SoundsGame.pcss';
// https://www.enterprise.ca/content/dam/global-vehicle-images/cars/CHRY_200_2015.png
const SoundsGame = ({squares} : props) => {
  const classes = classnames(
    styles.root
  );

  return (
    <div className={classes}>
        <div className={styles.verticalFlex}>
            <div className={styles.horizontalFlex}>
                <Square image={squares.get(0).url} sound={squares.get(0).sound} />
                <Square image={squares.get(1).url} sound={squares.get(1).sound} />
                <Square image={squares.get(2).url} sound={squares.get(2).sound} />
                <Square image={squares.get(3).url} sound={squares.get(3).sound} />
                <Square image={squares.get(4).url} sound={squares.get(4).sound} />
            </div>
            <div className={styles.horizontalFlex}>
                <Square image={squares.get(5).url} sound={squares.get(5).sound} />
                <Square image={squares.get(6).url} sound={squares.get(6).sound} />
                <Square image={squares.get(7).url} sound={squares.get(7).sound} />
                <Square image={squares.get(8).url} sound={squares.get(8).sound} />
                <Square image={squares.get(9).url} sound={squares.get(9).sound} />
            </div>
        </div>
    </div>
    );
};

export default SoundsGame;
