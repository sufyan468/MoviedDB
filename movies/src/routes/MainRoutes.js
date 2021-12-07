import Header from "../components/layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpcomingMovies from "../components/upcomingMovies/UpcomingMovies";
import PopularMovies from "../components/popularMovies/PopularMovies";
import PrivacyPolicy from "../components/People";
import Home from "../components/Home";
import Footer from "../components/layouts/Footer";
import { createContext } from "react";
import MovieDetail from "../components/popularMovies/MovieDetail";
import PeopleDetail from "../components/people/layouts/PeopleDetail";
const WellcomeMsg = createContext();

const Mainroutes = () => {
  return (
    <div>
      <WellcomeMsg.Provider value={"Welcome to "}></WellcomeMsg.Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PopularMovies" element={<PopularMovies />} />
          <Route path="/detail" element={<MovieDetail />} />
          <Route path="/upcoming/movies" element={<UpcomingMovies />} />
          <Route path="/person" pageName="People" element={<PrivacyPolicy />} />
          <Route
            path="/person/Detail"
            pageName="People"
            element={<PeopleDetail />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Mainroutes;
export { WellcomeMsg };
