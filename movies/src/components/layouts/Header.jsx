import React from "react";
import HeaderLogo from "../../assests/Images/Headerlogo.svg";
// Main Scss File

import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="HeaderBar HeaderBar">
          <Toolbar className="mobile-bar">
            <Link to="/">
              <img src={HeaderLogo} className="logoImg" alt="Movie DB" />
            </Link>

            <div className="Mobile-Navabar">
              <Link to="/PopularMovies">PopularMovies</Link>
              <Link to="/upcoming/movies">Upcoming Movies</Link>
              <Link to="/person">People</Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
