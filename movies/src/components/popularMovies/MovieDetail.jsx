import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import cardImg from "../../assests/Images/postImage.jpeg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MovieDetail = () => {
  return (
    <>
      <div
        className="w-100"
        style={{
          background: "white",
          height: "46px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button>Overview</Button>
          <Button>Media</Button>
          <Button href="#text-buttons">Share</Button>
        </Stack>
      </div>
      <div className="header large border first py-5">
        <Box className="inner_content custom_bg">
          <Container>
            <Grid container spacing={2}>
              <Grid item={true} md={5} sm={12} lg={3}>
                <img
                  src={cardImg}
                  alt="Movie Detail"
                  style={{
                    height: "450px",
                    width: "300px",
                  }}
                />
              </Grid>
              <Grid item={true} md={7} sm={12} lg={9} className="p-5">
                <h1 className="text-white">
                  Shang-Chi and the Legend of the Ten Rings (2021)
                </h1>
                <p>You can't outrun your destiny.</p>
                <h5>Overview</h5>
                <p className="text-white">
                  An Interpol-issued Red Notice is a global alert to hunt and
                  capture the world's most wanted. But when a daring heist
                  brings together the FBI's top profiler and two rival
                  criminals, there's no telling what will happen.
                </p>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default MovieDetail;
