import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchPokemon = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function Pokemon({ url }) {
  const { data, isLoading, isError, error } = useQuery(["pokemon", url], () =>
    fetchPokemon(url)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Stack spacing={2} direction='row' justifyContent='space-evenly'>
            <Stack spacing={2}>
              <Typography variant='h6' component='div'>
                #{`${data.id}`.padStart(4, "0")}
              </Typography>
              <Typography variant='h6' component='div'>
                {data.name}
              </Typography>
            </Stack>
            <img src={data.sprites.front_default} alt={data.name} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Pokemon;
