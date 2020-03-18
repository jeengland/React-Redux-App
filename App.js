import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchClues } from './actions/game-actions';
import { updateClue } from './actions/clue-actions';

import ClueContainer from './containers/ClueContainer';
import InputContainer from './containers/InputContainer';
import ScoreContainer from './containers/ScoreContainer';

import './App.css'

const App = ({ clues, currentClue, currentClueIndex, fetchClues, totalClues, updateClue }) => {
    useEffect(() => {
        fetchClues();
    }, []);
    useEffect(() => {
        if (currentClueIndex > totalClues) {
            fetchClues()
        } else {
            updateClue(clues[currentClueIndex]);
        }
    }, [currentClueIndex])
    return (
        <React.Fragment>
            {clues.length ? <ClueContainer /> : undefined}
            <InputContainer />
            <ScoreContainer />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        clues: state.game.clues,
        currentClue: state.clue.currentClue,
        currentClueIndex: state.clue.currentClueIndex,
        totalClues: state.clue.totalClues,
    }
}

export default connect(mapStateToProps, { fetchClues, updateClue })(App);