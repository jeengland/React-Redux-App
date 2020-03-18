import { FETCH_CLUES_SUCCESS } from '../actions/game-actions';
import { SUBMIT_CORRECT_ANSWER, SUBMIT_INCORRECT_ANSWER } from '../actions/clue-actions';

const initialState = {
    currentClue: undefined,
    totalClues: undefined,
}

const clueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLUES_SUCCESS: 
            return {
                ...state,
                currentClue: 0,
                totalClues: action.payload.data.length - 1,
            }
        case SUBMIT_CORRECT_ANSWER:
        case SUBMIT_INCORRECT_ANSWER:
            return {
                ...state,
                currentClue: currentClue + 1,
            }
        default:
            return state;
    }
}

export default clueReducer;