import React from "react";
import styled from "styled-components";
import { Card, Spin } from "antd";
import "antd/dist/antd.css";
import { LoadingOutlined } from "@ant-design/icons";

const Container = (props) => {
  const { pokemons } = props; //recibiendo por props desde elcomponente padre
  // prueba de push en github ///////////
  console.log(props);
  console.log(props);
  console.log(props);
  console.log(props);

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
            <Card
              bordered={false}
              className="carta"
              key={idx}
            >
              <div>
                <img
                  src={item.sprites.other.dream_world.front_default}
                  alt={item.name}
                />
              </div>
              <div>
                <div>
                  <h3>{item.name}</h3>
                  <div>#{item.id}</div>
                </div>
                <div>
                  <div>
                    {item.types.map((type, idx) => {
                      return <div key={idx}>{type.type.name}</div>;
                    })}
                  </div>
                  <div>🍕</div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </ContainerPokemon>
  );
};

const ContainerPokemon = styled.div`
  display: grid;
  //grid-grid-auto-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0px 10px;
  .cargando{
    display:flex;
    align-items:center;
    justify-content:space-evenly;
  }

  .carta {
    margin-bottom: 30px;
    border-radius: 20px;
    display: flex;
    flex:auto;
    width:310px;
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
    display:flex;
    flex-flow:wrap;
    //justify-content: space-evenly;
  }
  img {
    width: 100px;
    height: 100px;
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
  @media screen and(max-width:1550){
      .site-card-border-less-wrapper{
        justify-content: space-evenly;
      }

    }
    @media screen and(max-width:1075){
      .carta{
        width:500px;
      }

    }
`;

export default Container;
