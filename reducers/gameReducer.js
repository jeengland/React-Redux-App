import { FETCH_CLUES_START, FETCH_CLUES_SUCCESS, FETCH_CLUES_FAIL, ANSWER_MISMATCH } from '../actions/game-actions';
import { SUBMIT_CORRECT_ANSWER, SUBMIT_INCORRECT_ANSWER } from '../actions/clue-actions';

const initialState = {
    clues: [],
    score: 0,
    lastAnswer: '',
    lastScore: undefined,
    playerAnswer: '',
    correctAnswer: '',
    isLoading: false,
    error: '',
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLUES_START: 
            return { ...state, isLoading: true, error: '' }
        case FETCH_CLUES_SUCCESS:
            return { ...state, isLoading: false, error: '', clues: action.payload.data }
        case FETCH_CLUES_FAIL: 
            return { ...state, isLoading: false, error: action.payload.error }
        case SUBMIT_CORRECT_ANSWER:
            return { ...state, score: state.score + action.payload.score, lastAnswer: 'Correct', correctAnswer: '', playerAnswer: action.payload.answer }
        case SUBMIT_INCORRECT_ANSWER:
            return { ...state, score: state.score - action.payload.score, lastAnswer: 'Incorrect', correctAnswer: action.payload.correct, playerAnswer: action.payload.answer, lastScore: action.payload.score }
        case ANSWER_MISMATCH:
            return { ...state, score: state.score + (2 * state.lastScore), lastAnswer: 'Correct', correctAnswer: '', lastScore: undefined }
        default: 
            return state;
    };
};

export default gameReducer;