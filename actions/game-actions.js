import axios from 'axios';

export const FETCH_CLUES_START = 'FETCH_CLUES_START';
export const FETCH_CLUES_SUCCESS = 'FETCH_CLUES_SUCCESS';
export const FETCH_CLUES_FAIL = 'FETCH_CLUES_FAIL';

export const fetchClues = () => dispatch => {
    dispatch({ type: FETCH_CLUES_START })
    axios
        .get('http://jservice.io/api/clues?count=100')
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
}