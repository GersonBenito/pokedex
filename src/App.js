import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { getPokemon, getDataPokemon } from './Api/Api';
import Container from './components/Container';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemon = async () =>{
    try {
      const data = await getPokemon();
      const promises = data.results.map( async (item)=>{
        return await getDataPokemon(item.url);
      })
      const results = await Promise.all(promises);
      setPokemon(results)
    } catch (error) {
      console.log("ocurrio un problema al cargar los pokemones!");
    }
  }

  useEffect(()=>{
    console.log("soy useEffect");
    getAllPokemon();
  },[])
  return (
    <>
      <Navbar />
      <Container pokemons = {pokemon} />
    </>
  );
}

export default App;
