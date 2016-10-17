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
            sound: require('../sounds/cat.mp3'),
        },
        dog: {
            url: require('../images/animals/dogs/30220942672_8afaa23661_b.jpg'),
            sound: require('../sounds/animals/dogs/Dogs-Barking-SoundBible.com-625577590.mp3'),
        }
    }

  const images = {
    animals: animals,
  };

  return (
    <div className={classes}>
        <div className={styles.verticalFlex}>
            <div className={styles.horizontalFlex}>
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
            </div>
            <div className={styles.horizontalFlex}>
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
            </div>
            <div className={styles.horizontalFlex}>
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
            </div>

            <div className={styles.horizontalFlex}>
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
                <Square image={images.animals.cat.url} sound={animals.cat.sound} />
                <Square image={images.animals.dog.url} sound={animals.dog.sound} />
            </div>
        </div>
    </div>
    );
};

export default SoundsGame;
