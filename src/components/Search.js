import React, { useState } from "react";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import styled from "styled-components";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { searchPokemon } from "../Api/Api";

const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  //buscar pokemon
  const onClick = async (e) => {
    const dataPoke = await searchPokemon(search); //pasamos el parametro del state
    console.log("data pokemon ", dataPoke);
    setPokemon(dataPoke);
  };

  //icono microfono en el input buscar
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  //funcion captura lo que se escribe
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
    
    <SearchContainer>
      <Input
        className="poke"
        placeholder="Buscar pokemon"
        suffix={suffix}
        onChange={onChange}
      />

      <Button
        shape="circle"
        type="primary"
        icon={<SearchOutlined />}
        onClick={onClick}
      ></Button>
    </SearchContainer>
     
    </>
  );
};
const SearchContainer = styled.div`
  display: flex;
  //margin: 0px auto;
  padding:20px;
  width:100%;
  .poke {
    border-radius: 50px;
    margin-right: 5px;
    width:20%;
  }
  @media screen and (max-width: 1600px) {
    .poke {
      width: 14%;
    }
  }
  @media screen and (max-width: 1300px) {
    .poke {
      width: 18%;
    }
  }
  @media screen and (max-width: 1100px) {
    .poke {
      width: 23%;
    }
  }
  @media screen and (max-width: 760px) {
    .poke {
      width: 30%;
    }
  }
  @media screen and (max-width: 600px) {
    .poke {
      width: 40%;
    }
  }
  @media screen and (max-width: 412px) {
    .poke {
      width: 60%;
    }
  }
  @media screen and (max-width: 360px) {
    .poke {
      width: 90%;
    }
  }
`;

export default Search;
