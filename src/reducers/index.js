import * as actions from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const trelloReducer = (state=initialState, action ) => {
    if (action.type === actions.RESTART_GAME){
        return Object.assign({}, state, {
            type: action.type,
            feedback: action.feedback,
            auralStatus: action.auralStatus,
            correctAnswer: action.correctAnswer
        });
    }
    else if (action.type === actions.MAKE_GUESS){
        return Object.assign({}, state, {
            feedback: action.feedback,
            guesses: [...state.guesses, action.guess]
        });
    }
    else if (action.type === actions.AURAL_UPDATE){
        return Object.assign({}, state, {
            auralStatus: action.auralStatus
        })
    }
    return state;
}