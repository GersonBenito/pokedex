import React from "react";
import styled from "styled-components";
import { Card, Spin, Badge, Avatar, Image } from "antd";
import "antd/dist/antd.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Ranking } from "./Ranking";
import PaginationAnd from "./Pagination/PaginationAnd";

const Container = (props) => {
  const { pokemons } = props; //recibiendo por props desde elcomponente padre
  console.log("poke ", pokemons);
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  return (
    <ContainerPokemon>
      <div className="site-card-border-less-wrapper">
        {pokemons.length === 0 ? (
          <div className="cargando">
            <Spin indicator={antIcon} tip="Cargando..." />
          </div>
        ) : (
          pokemons.map((item, idx) => (
            <Card bordered={false} className="carta" key={idx}>
              <div>
                <Avatar
                  className="ava"
                  size={110}
                  src={
                    <Image src={item.sprites.other.dream_world.front_default} />
                  }
                />
              </div>
              <div>
                <div className="nameAndId">
                  <h3>{item.name}</h3>
                  <div>
                    <Badge count={item.id} overflowCount={2000} />
                  </div>
                </div>
                <div>
                  <div className="types">
                    {item.types.map((type, idx) => {
                      return <div key={idx}>{type.type.name}</div>;
                    })}
                  </div>
                  <Ranking />
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
      <PaginationAnd />
    </ContainerPokemon>
  );
};

const ContainerPokemon = styled.div`
  padding: 0px 10px;
  .ava {
    background-color:#16c79a;
    //background-image: linear-gradient(to right, pink, #38a28778);
    
  }
  .types {
    display: flex;
    justify-content: space-around;
    width: 175px;
    font-family: Arial;
    text-transform: capitalize;
  }
  .ant-card-body {
    padding: 24px;
    width: 100%;
    display: flex;
  }
  .nameAndId {
    //  width: 255px;
    display: flex;
    justify-content: space-between;
    width: 98%;
    text-transform: capitalize;
    //flex-flow:row;
  }
  .cargando {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .carta {
    margin-bottom: 30px;
    border-radius: 20px;
    //display: flex;
    flex: auto;
    width: 300px;
    margin-right: 25px;
    // box-shadow: 2px 8px 12px  #888888;
    box-shadow: 10px 5px 15px #ef4f4f;
    background-image: linear-gradient(to right, pink, #38a28778);
    //width:20%;
  }
  .site-card-border-less-wrapper {
    padding: 30px;
    background: #ececec;
    margin-top: -25px;
    margin-bottom: 20px;
    border-radius: 5px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    height: 500px;
    overflow-y: scroll;
  }
  img {
    margin-top: 12px;
    width: 85px;
    height: 85px;
    display: flex;
    //object-fit:contain;//ajusta la imagen a un solo tamaño
    //animacion
    // animation: escalar 1.5s infinite alternate;
  }
  //animacion
  /**
  @keyframes escalar {
    to {
      transform: scale(1);
    }
    from {
      transform: scale(1.05);
    }
  } */
  @media screen and(max-width:1550) {
    .site-card-border-less-wrapper {
      justify-content: space-evenly;
    }
  }
  @media screen and(max-width:1075) {
    .carta {
      width: 500px;
    }
  }
`;

export default Container;
