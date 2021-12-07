import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
const imgaeBseUrl = "https://image.tmdb.org/t/p/original";

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

const MoviesCard = (items) => {
  const dbImages = `${imgaeBseUrl}${items.backdrop_path}`;

  return (
    <>
      <Grid item sm={12} xs={12} md={6} lg={3}>
        <Link to="/detail">
          <Item>
            <Card>
              <div className="MovieCardImage">
                <CardMedia
                  component="img"
                  height="140"
                  image={dbImages}
                  title={items.title}
                />
              </div>

              <CardContent style={{ height: "9rem" }}>
                <a href={""} style={linkStyle}>
                  {items.title}
                </a>
                <p style={{ marginTop: "0px" }}>{items.vote_average}</p>
              </CardContent>
            </Card>
          </Item>
        </Link>
      </Grid>
    </>
  );
};

export default MoviesCard;
