import React from 'react';
import styled from '@emotion/styled';

const ClueCard = styled.div`
    background-color: #19138a;
    color: white;
    text-align: center;
    min-height: 40vh;
    text-shadow: 2px 2px black;
    @media (max-width: 500px) {
        padding: 2%;
    }
    .value {
        color: #eca03e;
        font-weight: bold;
        font-size: 4rem;
        margin: 0;
        @media (max-width: 500px) {
            font-size: 3rem;
        }
    }
    .category {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 3rem;
        margin: 0;
        padding: 1%;
        @media (max-width: 500px) {
            font-size: 2.5rem;
        }
    }
    .question {
        font-size: 2rem;
        padding: 15vh 2% 25vh;
        @media (max-width: 500px) {
            padding: 2%;
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