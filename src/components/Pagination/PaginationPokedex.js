import React from "react";
import "antd/dist/antd.css";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Space } from "antd";
import styled from "styled-components";

const PaginationPokedex = () => {
  return (
    <Container>
      <Space>
        <div className="previous">
          <LeftCircleOutlined />
        </div>
        <div>1 de 100</div>
        <div className="next">
          <RightCircleOutlined />
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
