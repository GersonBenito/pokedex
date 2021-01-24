import React from "react";
import "antd/dist/antd.css";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Space } from "antd";
import styled from "styled-components";

const PaginationPokedex = (props) => {
  const { page, totalPage, onleftClick, onRightClick } = props;
  return (
    <Container>
      <Space>
        <div className="previous">
          <LeftCircleOutlined onClick={onleftClick} />
        </div>
        <div>{page + 1} de {totalPage}</div>
        <div className="next">
          <RightCircleOutlined onClick={onRightClick} />
        </div>
      </Space>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  color: #16c79a;
  margin-top:-20px;
  .previous {
    cursor: pointer;
  }
  .next {
    cursor: pointer;
  }
`;

export default PaginationPokedex;
