import React from "react";
import Grid from "@mui/material/Grid";
import detailIMG from "../../../assests/Images/postImage.jpeg";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PeopleDetail = () => {
  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <Grid container spacing={5} style={{ alignItems: "center" }}>
          <Grid item xs={12} md={3} lg={3}>
            <img
              src={detailIMG}
              alt="UserName"
              className="rounded-5"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <h1>Grey Nichols</h1>
            <h4>Biography</h4>
            <p>
              Ryan Rodney Reynolds (born 23 October 1976) is a Canadian-American
              actor, film producer, and entrepreneur. He began his career
              starring in the Canadian teen soap opera Hillside (1991–1993) and
              had minor roles before landing the lead role on the sitcom Two
              Guys and a Girl between 1998 and 2001. Reynolds then starred in a
              range of films, including Van Wilder (2002), Waiting... (2005),
              and The Proposal (2009).
              <br />
              <br />
              He also performed in dramatic roles in Buried (2010), Woman in
              Gold (2015), and Life (2017), starred in action films such as
              Blade: Trinity (2004), Deadpool (2016), and 6 Underground (2019)
              and provided voice acting in the animated features The Croods
              (2013), Turbo (2013), and Pokemon: Detective Pikachu (2019).
              <br />
              <br />
              Reynolds's biggest commercial success came with the superhero
              films Deadpool (2016) and Deadpool 2 (2018), in which he played
              the title character. The former set numerous records at the time
              of its release for an R-rated comedy and his performance earned
              him nominations at the Critics' Choice Movie Awards and the Golden
              Globe Awards. Description above is from the Wikipedia article Ryan
              Reynolds, licensed under CC-BY-SA, full list of contributors on
              Wikipedia.
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PeopleDetail;
