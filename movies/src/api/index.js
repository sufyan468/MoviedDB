import axios from "axios";

const apiKey = "51f0e9434ea11bb6ac972704b0e7f20c";

const url =
  "https://api.themoviedb.org/3/movie/500?api_key=51f0e9434ea11bb6ac972704b0e7f20c";

const nowPlayingUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=51f0e9434ea11bb6ac972704b0e7f20c&language=en-US&page=1";

// Upcoming Movie API
const UpcomingmURL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=51f0e9434ea11bb6ac972704b0e7f20c&language=en-US&page=1";

// Movies
export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_Key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=51f0e9434ea11bb6ac972704b0e7f20c&language=en-US&page=1";
    const modifiData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: "https://image.tmdb.org/t/p/original" + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: "https://image.tmdb.org/t/p/original" + m["poster_path"],
      overview: posterUrl + m["overview"],
      rating: m["vote_average"],
    }));
    return modifiData;
  } catch (error) {}
};

// Upcoming Movies
export const FetchUpcomingMovie = async () => {
  try {
    const { data } = await axios.get(UpcomingmURL, {
      params: {
        api_Key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const posterUCUrl =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=51f0e9434ea11bb6ac972704b0e7f20c&language=en-US&page=1";
    const modifiDataUP = data["results"].map((m) => ({
      id: m["id"],
      backPoster: "https://image.tmdb.org/t/p/original" + m["poster_path"],
      poster: "https://image.tmdb.org/t/p/original" + m["poster_path"],
      title: m["title"],
      overview: posterUCUrl + m["overview"],
    }));
    return modifiDataUP;
  } catch (error) {}
};

// Person API Point
const personUrl =
  "https://api.themoviedb.org/3/person/popular?api_key=51f0e9434ea11bb6ac972704b0e7f20c&language=en-US&page=1";

// Top reated Persons
export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_Key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const persondata =
      "https://api.themoviedb.org/3/person/popular?api_key=51f0e9434ea11bb6ac972704b0e7f20c&language=en-US&page=1";
    const modifiDataP = data["results"].map((m) => ({
      id: m["id"],
      backPoster: "https://image.tmdb.org/t/p/original/" + m["poster_path"],
      poster: "https://image.tmdb.org/t/p/original/" + m["backdrop_path"],
      name: m["name"],
      title: m["title"],
      overview: persondata + m["overview"],
    }));
    return modifiDataP;
  } catch (error) {}
};

export const fetchTopratedMovie = () => {};
export const fetchMovieDetail = () => {};
export const fetchCasts = () => {};
export const fatchSimilarMovie = () => {};
