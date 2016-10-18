import { List, Map } from 'immutable';

export const RECEIVE_SQUARES = 'RECEIVE_SQUARES';


export function receiveSquares() {
    return function d(dispatch) {
        let squares = [];

        squares.push({
            url: require('../images/animals/rabbits/rabbit.jpg'),
            sound: require('../sounds/animals/rabbits/rabbit.mp3'), 
        });

        squares.push({
            url: require('../images/animals/tigers/tiger.jpg'),
            sound: require('../sounds/animals/tigers/tiger.mp3'), 
        });

        squares.push({
            url: require('../images/animals/horses/horse.jpg'),
            sound: require('../sounds/animals/horses/horse.mp3'), 
        });

        for (let i = 0; i < 9; i++) {
            squares.push({
                url: require('../images/animals/cats/nova.jpg'),
                sound: require('../sounds/animals/cats/cat.mp3'), 
            });

            squares.push({
                url: require('../images/animals/dogs/30220942672_8afaa23661_b.jpg'),
                sound: require('../sounds/animals/dogs/Dogs-Barking-SoundBible.com-625577590.mp3'),
            });
        }

        return dispatch({
            type: RECEIVE_SQUARES,
            payload: squares
        });
    }
}

const defaultState = Map({
    squares: List()
});

export default function (state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_SQUARES:
            return state.update('squares', squares => squares.concat(action.payload));
        default:
            return state;
    }
}

