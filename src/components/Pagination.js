import React from 'react'
import styled from 'styled-components'
import Title from './Title';

const Pagination = () => {
    return (
        <div>
            <StylePagination>
                {/**se puede agregar un icono svg de pokemon */}
                <Title text='Lista de pokemones' /> 
                <div className="pagination">pagination</div>
            </StylePagination>
        </div>
    )
}

const StylePagination = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    margin-top:-25px;
`;

export default Pagination
