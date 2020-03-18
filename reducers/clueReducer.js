import { FETCH_CLUES_SUCCESS } from '../actions/game-actions';
import { SUBMIT_CORRECT_ANSWER, SUBMIT_INCORRECT_ANSWER, UPDATE_CLUE } from '../actions/clue-actions';

const initialState = {
    currentClue: {},
    currentClueIndex: undefined,
    totalClues: undefined,
}

const clueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLUES_SUCCESS: 
            return {
                ...state,
                currentClue: action.payload.data[0],
                currentClueIndex: 0,
                totalClues: action.payload.data.length - 1,
            }
        case SUBMIT_CORRECT_ANSWER:
        case SUBMIT_INCORRECT_ANSWER:
            return {
                ...state,
                currentClueIndex: state.currentClueIndex + 1,
            }
        case UPDATE_CLUE:
            return {
                ...state,
                currentClue: action.payload.clue,
            }
        default:
            return state;
    }
}

export default clueReducer;