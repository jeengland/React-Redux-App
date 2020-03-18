import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchClues } from './actions/game-actions';

const App = ({ fetchClues }) => {
    useEffect(() => {
        fetchClues();
    }, [])
    return (
        <React.Fragment>
            <h1>Hello World</h1>
        </React.Fragment>
    )
}

export default connect(null, { fetchClues })(App);