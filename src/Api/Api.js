export const searchPokemon = async (pokemon) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("ha ocurrido un erro inesperado!! ",error);
    }
}

export const getPokemon = async (limit = 20, offset = 0) =>{
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log("Error al cargar la data!!");
    }
}

export const getDataPokemon = async (url) =>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Ops ! ha ocurrido un error");
    }
}