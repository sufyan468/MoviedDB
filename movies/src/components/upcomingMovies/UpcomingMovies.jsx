import Container from "@mui/material/Container";
import FilterMovies from "../popularMovies/layouts/FilterMovies";
import Cards from "./layouts/Cards";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const UpcomingMovies = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3} style={{ margin: "3rem 0rem" }}>
          <Typography
            variant="h5"
            color="initial"
            style={{ fontWeight: "bold" }}
          >
            Upcoming Movies
          </Typography>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} md={3} lg={3}>
            <FilterMovies />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={4}>
              <Cards />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UpcomingMovies;
