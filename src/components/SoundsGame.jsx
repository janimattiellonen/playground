import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';
import Square from './Square';


import styles from './SoundsGame.pcss';
// https://www.enterprise.ca/content/dam/global-vehicle-images/cars/CHRY_200_2015.png
const SoundsGame = props => {
  const classes = classnames(
    styles.root
  );

  return (
    <div className={classes}>
      <h3>Sounds</h3>

    <div className={styles.verticalFlex}>
        <div className={styles.horizontalFlex}>
            <Square image="https://www.enterprise.ca/content/dam/global-vehicle-images/cars/CHRY_200_2015.png" />
            <div className={classnames(styles.flexItem, styles.flipContainer)}> CAT</div>
            <div className={styles.flexItem}>DOG</div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
        </div>
        <div className={styles.horizontalFlex}>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
        </div>
        <div className={styles.horizontalFlex}>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
        </div>

        <div className={styles.horizontalFlex}>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
            <div className={styles.flexItem}></div>
        </div>
    </div>

    </div>
    );
};

export default SoundsGame;
