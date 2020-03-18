import React from 'react';

const Score = (props) => {
    return (
        <div>
        <p>Score: {props.score}</p>
        {props.lastAnswer ? <p>{props.lastAnswer}</p> : undefined }
        {props.correctAnswer ? <p>The correct answer was: {props.correctAnswer}</p> : undefined }
        {props.correctAnswer ? <p>You answered: {props.playerAnswer}</p> : undefined }
        {props.correctAnswer ? <button type='button' onClick={props.answerMismatch}>I answered it right</button> : undefined }
    </div>
    )
}

export default Score;