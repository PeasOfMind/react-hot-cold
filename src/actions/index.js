export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME,
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess, feedback) => {
    console.log('makeGuess action fired')
    return({
    type: MAKE_GUESS,
    feedback,
    guess
})};

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = (auralStatus) => ({
    type: AURAL_UPDATE,
    auralStatus
});

