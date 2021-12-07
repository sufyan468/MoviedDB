import React from "react";
import HeaderLogo from "../../assests/Images/Headerlogo.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Container mt={4}>
        <Box>
          <p className="mt-5">
            The elevation can be used to establish a hierachy between other
            content. In practical terms, the elevation controls the size of the
            shadow applied to the surface. In dark mode, raising the elevation
            also makes the surface lighter.
          </p>
        </Box>
      </Container>
      <div style={{ width: "100%" }} className="bg-theme mt-5">
        <Container>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <img src={HeaderLogo} alt="Footer Logo" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
