import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchClues } from './actions/game-actions';
import { loadClues } from './actions/clue-actions';

import ClueContainer from './containers/ClueContainer';
import InputContainer from './containers/InputContainer';

import Input from './components/Input';

import './App.css'

const App = ({ clues, fetchClues, loadClues }) => {
    useEffect(() => {
        fetchClues();
    }, []);
    return (
        <React.Fragment>
            {clues.length ? <ClueContainer clueId={0}/> : undefined}
            <Input />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        clues: state.game.clues,
    }
}

export default connect(mapStateToProps, { fetchClues })(App);