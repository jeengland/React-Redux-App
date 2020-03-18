import React from 'react';

const Clue = ({ clue }) => {
    return (
        <div className='clue'>
            <h2 className='category'>{clue.category.title}</h2>
            <h3 className='value'>{clue.value}</h3>
            <p className='answer'>{clue.question}</p>
        </div>
    )
}

export default Clue;