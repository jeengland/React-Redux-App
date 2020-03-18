import { FETCH_CLUES_START, FETCH_CLUES_SUCCESS, FETCH_CLUES_FAIL } from '../actions/game-actions';

const initialState = {
    clues: [],
    isLoading: false,
    error: '',
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLUES_START: 
            return { ...state, isLoading: true }
        default: 
            return state;
    };
};

export default gameReducer;