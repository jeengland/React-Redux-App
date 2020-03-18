import { connect } from 'react-redux';
import Clue from '../components/Clue';

const mapStateToProps = (state, ownProps) => {
    return {
        clue: state.clue.currentClue,
    }
}

export default connect(mapStateToProps)(Clue);