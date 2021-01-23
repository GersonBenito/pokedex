import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import styled from 'styled-components';

const PaginationAnd = (props) => {
    return (
        <Container>
          <Pagination defaultCurrent={1} total={50} />  
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin-top:-30;
    margin-bottom:10px;
    margin-top: -33px;
    position: sticky;

.ant-pagination-prev .ant-pagination-item-link, 
.ant-pagination-next .ant-pagination-item-link{
    border-radius:10px;

}
.ant-pagination-item{
    border-radius:10px;
}
`;

export default PaginationAnd
