import React, { useState } from 'react';
import clueReducer from '../reducers/clueReducer';

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
        <form onSubmit={handleSubmit}>
            <label htmlFor='answer'>Answer:
                <input type='text' name='answer' id='answer' placeholder='Answer' value={answer} onChange={handleChange}/>
                <input type='submit' />
            </label>
        </form>
    )
}

export default Input;