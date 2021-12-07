import axios from "axios";
const API_BASE_URL = "https://api.themoviedb.org/3";
const apiKey = "51f0e9434ea11bb6ac972704b0e7f20c";

const nowPlayingUrl = `${API_BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// Upcoming Movie API
const UpcomingmURL = `${API_BASE_URL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

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
    const posterUrl = `${API_BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
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
    const posterUCUrl = `${API_BASE_URL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
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
const personUrl = `${API_BASE_URL}/person/popular?api_key=${apiKey}&language=en-US&page=1`;

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
    const persondata = `${API_BASE_URL}/person/popular?api_key=${apiKey}&language=en-US&page=1`;
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

export const fetchPopularPeople = async () => {
  const data = await axios.get(UpcomingmURL);
  console.log("Popular Movies API data", data);
  return data;
};
