import { List, Map } from 'immutable';

export const RECEIVE_MEMORY_SQUARES     = 'RECEIVE_MEMORY_SQUARES';
export const FLIP_SQUARE                = 'FLIP_SQUARE';
export const RESET_FLIPS                = 'RESET_FLIPS';
export const MARK_SQUARES_AS_MATCHING   = 'MARK_SQUARES_AS_MATCHING';

const defaultState = Map({
    memorySquares: List(),
    flippedSquares: List(),
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function receiveMemorySquares() {
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
        ]

        let counter = 1;

        animals.map((animal) => {
            let squareId = counter;
            squares.push({
                id: counter++,
                squareId: squareId,
                url: animal.url,
                sound: animal.sound,
                flipped: false,
                matches: false,
            });

            squares.push({
                id: counter++,
                squareId: squareId,
                url: animal.url,
                sound: animal.sound,
                flipped: false,
                matches: false,
            });
        });

        return dispatch({
            type: RECEIVE_MEMORY_SQUARES,
            payload: shuffle(squares)
        });
    }
}

export function selectSquare(id) {
    return function d(dispatch, getState) {
        const flipped = getState().memoryGame.get('memorySquares').filter(s => s.flipped === true && s.matches === false);

        if (flipped.count() == 1) {

            const toBeFlipped = getState().memoryGame.get('memorySquares').get(getState().memoryGame.get('memorySquares').findIndex(t => t.id === id));

            dispatch({
                type: FLIP_SQUARE,
                payload: id,
            });  

            if (flipped.get(0).squareId === toBeFlipped.squareId) {
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
            return dispatch({
                type: RESET_FLIPS,
            });  
        }

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
