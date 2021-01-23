import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Search from "./Search";
//import Title from "./Title";

const Navbar = () => {
  const urlImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Container>
      <nav>
        <div />
        <div>
          <img src={urlImg} alt="pokemon" className="logoPoke" />
        </div>
        <div>🍕</div>
      </nav>
      <Search />
      <Pagination />
    </Container>
  );
};
const Container = styled.div`
  nav {
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
  }
  .logoPoke {
    width: 160px;
  }
  
`;

export default Navbar;
