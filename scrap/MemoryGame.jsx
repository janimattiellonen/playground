import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import Icon from 'react-fa';
import styles from './MemoryGame.pcss';

const MemoryGame = props => {
  const classes = classnames(
    styles.root
  );

  return (
    <div className={classes}>
      <h3>Memory</h3>

        <div className={styles.verticalFlex}>
            <div className={styles.horizontalFlex}>
              <div className={classnames(styles.flexItem, styles.flipContainer)}>
                    <div className={styles.flipper}>
                      <div className={styles.front}>
                        FRONT
                      </div>

                      <div className={styles.back}>
                        BACK
                      </div>
                    </div>
                </div>
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

export default MemoryGame;
