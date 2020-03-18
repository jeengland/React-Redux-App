import { connect } from 'react-redux';
import Clue from '../components/Clue';

const mapStateToProps = (state, ownProps) => {
    return {
        clue: state.game.clues[ownProps.clueId]
    }
}

export default connect(mapStateToProps)(Clue);