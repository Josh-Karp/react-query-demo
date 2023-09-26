import axios from "axios";
import { useQuery } from "react-query";

const fetchPokemon = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const usePokemon = (url) => {
  return useQuery(["pokemon", url], () => fetchPokemon(url));
};

export default usePokemon;
