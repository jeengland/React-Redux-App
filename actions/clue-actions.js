export const SUBMIT_CORRECT_ANSWER = 'SUBMIT_CORRECT_ANSWER'
export const SUBMIT_INCORRECT_ANSWER = 'SUBMIT_INCORRECT_ANSWER'

export const submitCorrectAnswer = (answer, score) => {
    return {
        type: SUBMIT_CORRECT_ANSWER,
        payload: { answer, score }
    }
}

export const submitIncorrectAnswer = (answer, score) => {
    return {
        type: SUBMIT_INCORRECT_ANSWER,
        payload: { answer, score }
    }
}