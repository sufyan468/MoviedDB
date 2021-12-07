import { useState, useEffect } from "react";
import { fetchPersons } from "../api/index";
import { WellcomeMsg } from "../routes/MainRoutes";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PrivacyPolicy = (titleNew) => {
  const [peoples, setPeoples] = useState([]);

  const fetchAPI = async () => {
    setPeoples(await fetchPersons());
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Box className="w-100 " style={{ margin: "1rem 0rem 4rem 0rem" }}>
        <Container>
          <WellcomeMsg.Consumer>
            {(titleNew) => {
              return <h2>Person</h2>;
            }}
          </WellcomeMsg.Consumer>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={5}>
          {peoples.map((countPeolpe, index) => {
            return (
              <Grid
                item={true}
                xs={12}
                md={3}
                lg={3}
                key={index.toString}
                className="PersonCards"
              >
                <img src={countPeolpe.poster} alt={countPeolpe.title} />
                <box style={{ padding: "0.7rem" }}>
                  <Link to="/person/Detail">{countPeolpe.name} </Link>
                  <p>{countPeolpe.title}</p>
                </box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
