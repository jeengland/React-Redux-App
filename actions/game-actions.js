import axios from 'axios';

export const FETCH_CLUES_START = 'FETCH_CLUES_START';
export const FETCH_CLUES_SUCCESS = 'FETCH_CLUES_SUCCESS';
export const FETCH_CLUES_FAIL = 'FETCH_CLUES_FAIL';
export const ANSWER_MISMATCH = 'ANSWER_MISMATCH';

export const fetchClues = () => dispatch => {
    dispatch({ type: FETCH_CLUES_START })
    axios
        .get('http://jservice.io/api/random?count=100')
        .then((response) => {
            console.log("Clues fetched!")
            dispatch({ type: FETCH_CLUES_SUCCESS, payload: { data: response.data }})
        })
        .catch((error) => {
            console.error(error);
            dispatch({ type: FETCH_CLUES_FAIL, payload: { error: error.message }})
        })
}

export const answerMismatch = () => {
    return {
        type: ANSWER_MISMATCH,
    }
}