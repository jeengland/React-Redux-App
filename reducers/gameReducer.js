import { FETCH_CLUES_START, FETCH_CLUES_SUCCESS, FETCH_CLUES_FAIL } from '../actions/game-actions';

const initialState = {
    clues: [],
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
        default: 
            return state;
    };
};

export default gameReducer;