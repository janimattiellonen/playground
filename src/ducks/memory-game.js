import { List, Map } from 'immutable';

export const RECEIVE_MEMORY_SQUARES     = 'RECEIVE_MEMORY_SQUARES';
export const FLIP_SQUARE                = 'FLIP_SQUARE';
export const RESET_FLIPS                = 'RESET_FLIPS';
export const MARK_SQUARES_AS_MATCHING   = 'MARK_SQUARES_AS_MATCHING';

const defaultState = Map({
    memorySquares: List(),
    flippedSquares: List(),
});

export function receiveMemorySquares() {
    return function d(dispatch) {
        let squares = [];

        squares.push({
            id: 1,
            squareId: 1,
            url: require('../images/animals/rabbits/rabbit.jpg'),
            sound: require('../sounds/animals/rabbits/rabbit.mp3'), 
            flipped: false,
            matches: false,
        });

        squares.push({
            id: 2,
            squareId: 2,
            url: require('../images/animals/tigers/tiger.jpg'),
            sound: require('../sounds/animals/tigers/tiger.mp3'), 
            flipped: false,
            matches: false,
        });

        squares.push({
            id: 3,
            squareId: 3,
            url: require('../images/animals/horses/horse.jpg'),
            sound: require('../sounds/animals/horses/horse.mp3'), 
            flipped: false,
            matches: false,
        });

       squares.push({
            id: 4,
            squareId: 4,
            url: require('../images/animals/birds/owl.jpg'),
            sound: require('../sounds/animals/birds/horned_owl-Mike_Koenig-1945374932.mp3'), 
            flipped: false,
            matches: false,
        });

       squares.push({
            id: 5,
            squareId: 5,
            url: require('../images/animals/dogs/gobi.jpg'),
            sound: require('../sounds/animals/dogs/Dogs-Barking-SoundBible.com-625577590.mp3'), 
            flipped: false,
            matches: false,
        });

        squares.push({
            id: 6,
            squareId: 6,
            url: require('../images/animals/bears/bear.jpg'),
            sound: require('../sounds/animals/bears/Bear-SoundBible.com-866204188.mp3'), 
            flipped: false,
            matches: false,
        });

        squares.push({
            id: 7,
            squareId: 7,
            url: require('../images/animals/elephants/11330864553_250afbfb8b_k.jpg'),
            sound: require('../sounds/animals/elephants/Elephant-SoundBible.com-551032783.mp3'), 
            flipped: false,
            matches: false,
        });

        squares.push({
            id: 8,
            squareId: 8,
            url: require('../images/animals/squirrels/4847417509_7872bec6c8_b.jpg'),
            sound: require('../sounds/animals/squirrels/Angry-Squirrel-SoundBible.com-1620933676.mp3'), 
            flipped: false,
            matches: false,
        });

        squares.push({
                id: 9,
                squareId: 9,
                url: require('../images/animals/cats/nova.jpg'),
                sound: require('../sounds/animals/cats/cat.mp3'), 
                flipped: false,
                matches: false,
        });

        squares.push({
            id: 10,
            squareId: 10,
            url: require('../images/animals/dogs/30220942672_8afaa23661_b.jpg'),
            sound: require('../sounds/animals/dogs/Dogs-Barking-SoundBible.com-625577590.mp3'),
            flipped: false,
            matches: false,
        });

        console.log(JSON.stringify(squares.map((t) => {return t.id;})));

        return dispatch({
            type: RECEIVE_MEMORY_SQUARES,
            payload: squares
        });
    }
}

export function selectSquare(id) {
    console.log("selectSquare: " + id);

    return function d(dispatch, getState) {

        console.log(JSON.stringify(getState().memoryGame.get('memorySquares').get(1), null, 4));

        const flipped = getState().memoryGame.get('memorySquares').filter(s => s.flipped === true && s.matches === false);

        console.log("flip count: " + flipped.count());

        if (flipped.count() == 1) {

            const toBeFlipped = getState().memoryGame.get('memorySquares').get(getState().memoryGame.get('memorySquares').findIndex(t => t.id === id));

            console.log(id + ", 0: " + flipped.get(0).squareId);
            console.log(id + ", 1: " + toBeFlipped.squareId);

            dispatch({
                type: FLIP_SQUARE,
                payload: id,
            });  

            if (flipped.get(0).squareId === toBeFlipped.squareId) {
                console.log("WE HAVE A MATCH!");
                dispatch({
                    type: MARK_SQUARES_AS_MATCHING,
                    payload: [
                        flipped.get(0).id,
                        toBeFlipped.id,
                    ],
                });  
            } else {
                 setTimeout(function(){ 
                        dispatch({
                        type: RESET_FLIPS,
                    });  
                }, 1000);
            } 
            return;

        } else if (flipped.count() >= 2) {
            console.log("no more flippin");

            return dispatch({
                type: RESET_FLIPS,
            });  
        }

        console.log("Reached the end, now flipping");
        return dispatch({
            type: FLIP_SQUARE,
            payload: id,
        });        
    }
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_MEMORY_SQUARES:
            return state.update('memorySquares', squares => squares.concat(action.payload));
        case FLIP_SQUARE:
            return state
                .updateIn(
                    [
                        'memorySquares',
                        state.get('memorySquares').findIndex(t => t.id === action.payload)
                    ], square => ({
                        ...square,
                        flipped: true,
                    })
                )
        case RESET_FLIPS:
            console.log("ss");
            return state.update('memorySquares', squares => squares.map((t) => {
                if (t.matches === false) {
                   t.flipped = false; 
                }
                
                return t;
            }));
        case MARK_SQUARES_AS_MATCHING:
            const id1 = action.payload[0];
            const id2 = action.payload[1];

            console.log(id2, id2);

            let foo = state
                .updateIn(
                    [
                        'memorySquares',
                        state.get('memorySquares').findIndex(t => t.id === id1)
                    ], square => ({
                        ...square,
                        flipped: true,
                        matches: true,
                    })
                )

            return foo
                .updateIn(
                    [
                        'memorySquares',
                        state.get('memorySquares').findIndex(t => t.id === id2)
                    ], square => ({
                        ...square,
                        flipped: true,
                        matches: true,
                    })
                )

        default:
            return state;
    }
}

