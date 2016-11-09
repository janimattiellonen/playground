import { List, Map } from 'immutable';

export const RECEIVE_SQUARES = 'RECEIVE_SQUARES';


export function receiveSquares() {
    console.log("222432");
    return function d(dispatch) {
        let squares = [];

        let animals = [
            {
                url: require('../images/animals/rabbits/rabbit.jpg'),
                sound: require('../sounds/animals/rabbits/rabbit.mp3'), 
            },
            {
                url: require('../images/animals/tigers/tiger.jpg'),
                sound: require('../sounds/animals/tigers/tiger.mp3'), 
            },
            {
                url: require('../images/animals/horses/horse.jpg'),
                sound: require('../sounds/animals/horses/horse.mp3'), 
            },
            {
                url: require('../images/animals/birds/owl.jpg'),
                sound: require('../sounds/animals/birds/horned_owl-Mike_Koenig-1945374932.mp3'), 
            },
            {
                url: require('../images/animals/dogs/gobi.jpg'),
                sound: require('../sounds/animals/dogs/Dogs-Barking-SoundBible.com-625577590.mp3'),   
            },
            {
                url: require('../images/animals/bears/bear.jpg'),
                sound: require('../sounds/animals/bears/Bear-SoundBible.com-866204188.mp3'), 
            },
            {
                url: require('../images/animals/elephants/11330864553_250afbfb8b_k.jpg'),
                sound: require('../sounds/animals/elephants/Elephant-SoundBible.com-551032783.mp3'), 
            },
            {
                url: require('../images/animals/squirrels/4847417509_7872bec6c8_b.jpg'),
                sound: require('../sounds/animals/squirrels/Angry-Squirrel-SoundBible.com-1620933676.mp3'), 
            },
            {
                url: require('../images/animals/cats/nova.jpg'),
                sound: require('../sounds/animals/cats/cat.mp3'), 
            },
            {
                url: require('../images/animals/dogs/30220942672_8afaa23661_b.jpg'),
                sound: require('../sounds/animals/dogs/Dogs-Barking-SoundBible.com-625577590.mp3'),
            }
        ];

        let counter = 1;

        animals.map((animal) => {
            let squareId = counter;
            squares.push({
                id: counter++,
                squareId: squareId,
                url: animal.url,
                sound: animal.sound,
            });
        });

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

