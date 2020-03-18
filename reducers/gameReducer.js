import { FETCH_CLUES_START, FETCH_CLUES_SUCCESS, FETCH_CLUES_FAIL } from '../actions/game-actions';
import { SUBMIT_CORRECT_ANSWER, SUBMIT_INCORRECT_ANSWER } from '../actions/clue-actions';

const initialState = {
    clues: [],
    score: 0,
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
            return { ...state, score: state.score + action.payload.score }
        default: 
            return state;
    };
};

export default gameReducer;