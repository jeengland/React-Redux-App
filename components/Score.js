import React from 'react';

const Score = (props) => {
    return (
        <div>
            <p>Score: {props.score}</p>
            {/* Only show lastAnswer if a question has been answered */}
            {props.lastAnswer ? <p>{props.lastAnswer}</p> : undefined }
            {/* Only show the correct answer if the question was incorrectly answered */}
            {props.correctAnswer ? <p>The correct answer was: {props.correctAnswer}</p> : undefined }
            {props.correctAnswer ? <p>You answered: {props.playerAnswer}</p> : undefined }
            {props.correctAnswer ? <button type='button' onClick={props.answerMismatch}>I answered it right</button> : undefined }
        </div>
    )
}

export default Score;