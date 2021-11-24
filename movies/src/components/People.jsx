import { WellcomeMsg } from "../views/App/App";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchPersons } from "../api/index";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

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
      <div className="w-100 " style={{ margin: "1rem 0rem 4rem 0rem" }}>
        <Container>
          <WellcomeMsg.Consumer>
            {(titleNew) => {
              return <h2>Person</h2>;
            }}
          </WellcomeMsg.Consumer>
        </Container>
      </div>

      <Container>
        <Grid container spacing={5} style={{ justifyContent: "space-between" }}>
          {peoples.map((countPeolpe, index) => {
            return (
              <Grid
                Item
                md={4}
                lg={2.3}
                sm={8}
                key={index}
                className="PersonCards"
                style={{ width: "100%" }}
              >
                <img src={countPeolpe.poster} alt={countPeolpe.title} />
                <div style={{ padding: "0.7rem" }}>
                  <Link to="/person/Detail">{countPeolpe.name} Jiysa</Link>
                  <p>{countPeolpe.title}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
