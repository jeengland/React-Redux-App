import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchClues } from './actions/game-actions';
import ClueContainer from './containers/ClueContainer';

import './App.css'

const App = ({ fetchClues, clues}) => {
    useEffect(() => {
        fetchClues();
    }, [])
    return (
        <React.Fragment>
            {clues.length ? <ClueContainer clueId={0}/> : undefined}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        clues: state.game.clues,
    }
}

export default connect(mapStateToProps, { fetchClues })(App);