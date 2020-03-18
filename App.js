import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { fetchClues } from './actions/game-actions';
import { updateClue, skipQuestion } from './actions/clue-actions';

import ClueContainer from './containers/ClueContainer';
import InputContainer from './containers/InputContainer';
import ScoreContainer from './containers/ScoreContainer';

const Column = styled.div`
    max-width: 1000px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #24292e;
    h1 {
        text-align: center;
    }
    .userArea {
        display: flex;
        flex-direction: row;
    }
`

const App = ({ clues, currentClue, currentClueIndex, fetchClues, totalClues, skipQuestion, updateClue }) => {
    // useEffect to pull clues from API on page load
    useEffect(() => {
        fetchClues();
    }, []);
    // useEffect to update to the next clue, or pull more clues if all clues have been used
    useEffect(() => {
        if (currentClueIndex > totalClues) {
            fetchClues()
        } else {
            updateClue(clues[currentClueIndex]);
        }
    }, [currentClueIndex])
    // useEffect to skip a question if it is missing vital information
    useEffect(() => {
        if (currentClue) {
            if (!currentClue.answer || !currentClue.value || !currentClue.question || !currentClue.category.title ) {
                skipQuestion();
            }
        }
    }, [currentClue])
    return (
        <Column>
            {clues.length ? <ClueContainer /> : <h1>Loading...</h1>}
            <div className='userArea'>
                <InputContainer />
                <ScoreContainer />
            </div>
        </Column>
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

export default connect(mapStateToProps, { fetchClues, updateClue, skipQuestion })(App);