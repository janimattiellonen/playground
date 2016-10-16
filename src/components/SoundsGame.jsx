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

    const animals = {
        cat: {
            url: require('../images/animals/cats/nova.jpg'),
        }
    }

  const images = {
    animals: animals,
  };

  return (
    <div className={classes}>
        <div className={styles.verticalFlex}>
            <div className={styles.horizontalFlex}>
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
