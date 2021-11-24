import React from "react";
import { Container, Typography } from "@mui/material";
import FilterMovies from "./layouts/FilterMovies";
import Grid from "@mui/material/Grid";
import MoviesCard from "./layouts/MoviesCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PopularMovies = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3} style={{ margin: "3rem 0rem" }}>
          <Typography
            variant="h5"
            color="initial"
            style={{ fontWeight: "bold" }}
          >
            Popular Movies
          </Typography>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} md={3} lg={3}>
            <FilterMovies />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={4}>
              <MoviesCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PopularMovies;
