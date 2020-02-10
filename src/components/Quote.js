import React from 'react';
import styled from '@emotion/styled'

const QuoteContainer = styled.div`
    margin-top: 12rem
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    
    @media (min-width: 992px) {
        margin-top: 10rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding: 1rem;

    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        padding: 1rem;
    }
`



const Quote = ({quote}) => {
    return (
        <QuoteContainer>
            <h1>{quote.quote}</h1>
            <p>- {quote.author} </p>
        </QuoteContainer>
    );
};

export default Quote;