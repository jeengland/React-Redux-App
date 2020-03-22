import React from 'react';
import styled from '@emotion/styled';

const ClueCard = styled.div`
    background-color: #19138a;
    color: white;
    text-align: center;
    min-height: 30vh;
    text-shadow: 2px 2px black;
    @media (max-width: 500px) {
        min-height: 50vh;
    }
    .value {
        color: #eca03e;
        font-weight: bold;
        font-size: 4rem;
        margin: 0;
        @media (max-width: 500px) {
            font-size: 2.5rem;
        }
    }
    .category {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 3rem;
        margin: 0;
        padding: 1%;
        font-family: 'Anton', sans-serif;
        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }
    .question {
        text-transform: uppercase;
        font-size: 2.5rem;
        padding: 10vh 2% 20vh;
        @media (max-width: 500px) {
            padding: 5%;
            font-size: 1.5rem;
        }
    }
`


const Clue = ({ clue }) => {
    return (
        <ClueCard>
            <p className='value'>{clue.value}</p>
            <p className='category'>{clue.category.title}</p>
            <p className='question'>{clue.question}</p>
        </ClueCard>
    )
}

export default Clue;