import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import styled from 'styled-components';

export const Ranking = () => {
    const value = 3;
    const [rank, setRank] = useState(value);
    const ranking = ['Terrible','Malo','Bueno','Muy bueno','Maravilloso'];

    const handlerChange = (value) =>{
        setRank(value)
    }

    const { valor } = rank;

    return (
        <StyleRate>
            <span>
                <Rate tooltips={ranking} onChange={handlerChange} value={rank} />
                {rank ? <span className="ranking">{ranking[rank - 1]}</span> : ''}
            </span>
        </StyleRate>
    )
}
const StyleRate = styled.div`
    span{
        display:flex;
        flex-direction:column;
        align-items:center;
        font-family:Arial;
    }
    
`;

export default Ranking;
