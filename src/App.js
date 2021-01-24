import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { getPokemon, getDataPokemon } from './Api/Api';
import Container from './components/Container';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [loading, setLoading] = useState(true);

  const getAllPokemon = async () =>{
    try {
      setLoading(true)
      const data = await getPokemon(20, 20 * page);
      const promises = data.results.map( async (item)=>{
        return await getDataPokemon(item.url);
      })
      const results = await Promise.all(promises);
      setPokemon(results)
      setLoading(false);
      setTotalPage(Math.ceil(data.count / 20))
    } catch (error) {
      console.log("ocurrio un problema al cargar los pokemones!");
    }
  }

  useEffect(()=>{
    getAllPokemon();
  },[page])

  const nextPage = () =>{
    console.log('next page');
    const next = Math.max(page + 1, 0);
    setPage(next);
  }

  const previousPage = () =>{
    console.log('previous page');
    const previous = Math.min(page - 1, totalPage)
    setPage(previous);
  }
  return (
    <>
      <Navbar 
        page={page} 
        totalPage={totalPage}
        onleftClick={previousPage}
        onRightClick={nextPage}
      />
      <Container 
        pokemons = {pokemon} 
        loading={loading} 
        page={page} 
        totalPage={totalPage}
      />
    </>
  );
}

export default App;
