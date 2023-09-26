import { Container, Grid } from "@mui/material";
import React from "react";
import usePokemonList from "../hooks/usePokemonList";
import Pokemon from "./Pokemon";

function PokemonList() {
  const { data, isLoading, isError, error } = usePokemonList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map(({ name, url }) => (
          <Pokemon key={name} url={url} />
        ))}
      </Grid>
    </Container>
  );
}

export default PokemonList;
