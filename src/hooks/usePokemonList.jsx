import axios from "axios";
import { useQuery } from "react-query";

const fetchPokemonData = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  return response.data.results;
};

const usePokemonList = () => {
  return useQuery("pokemonData", fetchPokemonData);
};

export default usePokemonList;
