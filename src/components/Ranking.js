import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import styled from 'styled-components';
import { FrownOutlined, MehOutlined, HeartOutlined, SmileOutlined, FireOutlined } from '@ant-design/icons';

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
                {rank ? <span>{
                    ranking[rank - 1] === 'Terrible' ? (
                        <span className="ranking" style={{color:'red'}}>{ranking[rank - 1]}<FrownOutlined /></span>
                    ):(
                        ranking[rank - 1] === 'Malo' ? (
                            <span className="ranking" style={{color:'darkred'}}>{ranking[rank - 1]}<FrownOutlined /></span>
                        ):(
                            ranking[rank - 1] === 'Bueno' ? (
                                <span className="ranking" style={{color:'#e27802'}}>{ranking[rank - 1]}<MehOutlined /></span>
                            ):(
                                ranking[rank - 1] === 'Muy bueno' ? (
                                    <span className="ranking" style={{color:'limegreen'}}>{ranking[rank - 1]}<SmileOutlined /></span>
                                ):(
                                   ranking[rank - 1] === 'Maravilloso' ? (
                                        <span className="ranking" style={{color:'green'}}>{ranking[rank - 1]}<SmileOutlined />
                                            <FireOutlined style={{color:'#e27802'}} />
                                        </span>
                                   ):(
                                        <span>{ranking[rank - 1]}</span>
                                   )
                                )
                            )
                        )
                    )
                }</span> : ''}
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
    .ranking{
        display:flex;
        flex-direction: row;
    }
    
`;

export default Ranking;
