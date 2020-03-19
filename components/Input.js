import React, { useState } from 'react';
import styled from '@emotion/styled';

import clueReducer from '../reducers/clueReducer';
import { skipQuestion } from '../actions/clue-actions';

const InputCard = styled.div`
    font-family: 'Open Sans', sans-serif;
    width: 80%;
    font-size: 1.8rem;
    color: white;
    padding: 0 2% 0;
    @media (max-width: 500px) {
        font-size: 1rem;
        margin: 0 auto;
    }
    label {
        display: flex;
        flex-direction: column;
        input {
            margin-top: 2%;
        }
    }
    .buttons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 5%;
    }
`

const Input = (props) => {
    const [answer, setAnswer] = useState('');
    const handleChange = (event) => setAnswer(event.target.value);
    const handleSubmit = () => {
        event.preventDefault();
        if (answer.toLowerCase() === props.clue.answer.toLowerCase()) {
            props.submitCorrectAnswer(answer, props.clue.value)
        } else {
            props.submitIncorrectAnswer(answer, props.clue.value, props.clue.answer)
        }
        setAnswer('');
    } 
    return (
        <InputCard>
            <form onSubmit={handleSubmit}>
                <label htmlFor='answer'>Answer:
                    <input autofocus='true' type='text' name='answer' id='answer' autoComplete='off' value={answer} onChange={handleChange}/>
                </label>
                <div className='buttons'>
                    <input type='submit' />
                    <button type='button' onClick={props.skipQuestion}>Skip Question</button>
                </div>
            </form>
        </InputCard>
    )
}

export default Input;