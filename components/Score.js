import React from 'react';
import styled from '@emotion/styled';

const ScoreCard = styled.div`
    color: white;
    width: 50%;
    padding: 0 2% 0;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: 500px) {
        width: 80%;
        margin: 3% auto 0;
    }
    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .score {
        font-size: 2rem;
        margin: 0;
        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
    .correct, .incorrect {
        font-size: 2rem;
        margin: 0;
        margin-right: 30%;
        @media (max-width: 500px) {
            font-size: 1rem;
        }
    }
    .incorrect {
        color: red
    }
    .correct {
        color: green;
    }
`

const Score = (props) => {
    return (
        <ScoreCard>
            <div className='top'>
                <p className='score'>Score: {props.score}</p>
                {/* Only show lastAnswer if a question has been answered */}
                {props.lastAnswer === 'Correct' ? <p className='correct'>{props.lastAnswer}</p> :  <p className='incorrect'>{props.lastAnswer}</p> }
            </div>
            {/* Only show the correct answer if the question was incorrectly answered */}
            {props.correctAnswer ? <p>The correct answer was: {props.correctAnswer}</p> : undefined }
            {props.correctAnswer ? <p>You answered: {props.playerAnswer}</p> : undefined }
            {props.correctAnswer ? <button type='button' onClick={props.answerMismatch}>I answered it right</button> : undefined }
        </ScoreCard>
    )
}

export default Score;