import { Container, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Pokemon from "./Pokemon";

const fetchPokemonData = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  return response.data.results;
};

function PokemonList() {
  const { data, isLoading, isError, error } = useQuery(
    "pokemonData",
    fetchPokemonData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map(({ name, url }) => <Pokemon key={name} url={url} />)}
      </Grid>
    </Container>
  );
}

export default PokemonList;
