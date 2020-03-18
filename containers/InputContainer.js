import { connect } from 'react-redux';

import Input from '../components/Input';

import { submitCorrectAnswer, submitIncorrectAnswer } from '../actions/clue-actions';

const mapStateToProps = (state) => {
    return {
        clue: state.clue.currentClue
    }
}

export default connect(mapStateToProps, { submitCorrectAnswer, submitIncorrectAnswer })(Input);