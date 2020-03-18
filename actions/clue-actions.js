export const SUBMIT_CORRECT_ANSWER = 'SUBMIT_CORRECT_ANSWER';
export const SUBMIT_INCORRECT_ANSWER = 'SUBMIT_INCORRECT_ANSWER';
export const UPDATE_CLUE = 'UPDATE_CLUE';
export const SKIP_QUESTION = 'SKIP_QUESTION';

export const submitCorrectAnswer = (answer, score) => {
    return {
        type: SUBMIT_CORRECT_ANSWER,
        payload: { answer, score }
    }
}

export const submitIncorrectAnswer = (answer, score, correct) => {
    return {
        type: SUBMIT_INCORRECT_ANSWER,
        payload: { answer, score, correct }
    }
}

export const updateClue = (clue) => {
    return {
        type: UPDATE_CLUE,
        payload: { clue }
    }
}

export const skipQuestion = () => {
    return {
        type: SKIP_QUESTION
    }
}