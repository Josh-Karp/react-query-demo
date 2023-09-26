import axios from "axios";
import { useQuery } from "react-query";
import Logger from "../utils/logger";

const fetchPokemonData = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    return response.data.results;
  } catch (error) {
    Logger.error(error);
    throw error;
  }
};

const usePokemonList = () => {
  return useQuery("pokemonData", fetchPokemonData);
};

export default usePokemonList;
