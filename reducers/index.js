import { combineReducers } from 'redux';

import game from './gameReducer';
import clue from './clueReducer';

export default combineReducers({
    game,
    clue,
})
