import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";

const heading = {
  color: "white",
  width: "100%",
};

const Hero = (props) => {
  return (
    <Grid xs={12} sm={12} md={11} style={{ margin: "auto" }}>
      <Box className="HeroSection">
        <Typography variant="h1" style={heading} color="initial">
          {props.title}.
        </Typography>
        <div className="w-100">
          <h2 className="text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <div className="w-100">
          <Grid container spacing={0}>
            <Grid md={12} lg={12} sm={12}>
              <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Search Here ...."
              />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Grid>
  );
};

export default Hero;
