import React from 'react'
import styled from 'styled-components'

const Title = ({text}) => {
    return (
        <div>
            <StyledTitle>
                <p>{text}</p>
            </StyledTitle>
        </div>
    )
}

const StyledTitle = styled.div`
    color:#16c79a;
    font-size:25px;
    font-family:Verdana;
    display:flex;
    justify-content:center;
`;

export default Title
