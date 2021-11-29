import { useState, useEffect } from "react";
import { fetchMovies } from "../../../api/index";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const linkStyle = {
  fontWeight: "700",
  color: "#000",
};

const MoviesCard = () => {
  const [topMovies, setTopMovies] = useState([]);

  const fetchAPI = async () => {
    setTopMovies(await fetchMovies());
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {topMovies.map((postItem, index) => {
        return (
          <Grid xs={12} md={6} lg={2.3} key={index}>
            <Link to="/detail">
              <Item>
                <Card>
                  <div className="MovieCardImage">
                    <CardMedia
                      component="img"
                      height="140"
                      src={postItem.poster}
                      alt={postItem.title}
                    />
                  </div>

                  <CardContent style={{ height: "9rem" }}>
                    <a href={""} style={linkStyle}>
                      {postItem.title}
                    </a>
                    <p style={{ marginTop: "0px" }}>{postItem.title}</p>
                  </CardContent>
                </Card>
              </Item>
            </Link>
          </Grid>
        );
      })}
    </>
  );
};

export default MoviesCard;
