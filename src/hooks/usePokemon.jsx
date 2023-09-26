import axios from "axios";
import { useQuery } from "react-query";
import Logger from "../utils/logger";

const fetchPokemon = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Logger.error(error);
    throw error;
  }
};

const usePokemon = (url) => {
  return useQuery(["pokemon", url], () => fetchPokemon(url));
};

export default usePokemon;
