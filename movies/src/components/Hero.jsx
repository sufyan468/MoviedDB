import { Grid, Typography, TextField } from "@mui/material";
import React from "react";

const Hero = (props) => {
  return (
    <Grid xs={12} sm={12} md={11} style={{ margin: "auto" }}>
      <div className="HeroSection">
        <Typography
          variant="h1"
          style={{ color: "white", width: "100%" }}
          color="initial"
        >
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
      </div>
    </Grid>
  );
};

export default Hero;
