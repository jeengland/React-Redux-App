import { connect } from 'react-redux';

import Score from '../components/Score';

import { answerMismatch } from '../actions/game-actions';

const mapStateToProps = (state) => {
    return {
        correctAnswer: state.game.correctAnswer,
        lastAnswer: state.game.lastAnswer,
        playerAnswer: state.game.playerAnswer,
        score: state.game.score
    }
}

export default connect(mapStateToProps, { answerMismatch })(Score);