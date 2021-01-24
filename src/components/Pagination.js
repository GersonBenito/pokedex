import React from 'react'
import styled from 'styled-components'
import PaginationPokedex from './Pagination/PaginationPokedex';
import Title from './Title';

const Pagination = (props) => {
    const { page, totalPage, onleftClick, onRightClick } = props; 
    return (
        <div>
            <StylePagination>
                {/**se puede agregar un icono svg de pokemon */}
                <Title text='Lista de pokemones' /> 
                <div className="pagination">
                    <PaginationPokedex 
                        page={page} 
                        totalPage={totalPage} 
                        onleftClick={onleftClick} 
                        onRightClick={onRightClick} 
                    />
                </div>
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
