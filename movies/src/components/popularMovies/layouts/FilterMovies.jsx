import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const SearchMovies = () => {
  const [allData, setAllData] = useState([]);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sort </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ fontSize: "12px" }}>
          <hr />
          <p>Sort Results By</p>
          {/* ---------------- Filter Buttons ----------------- */}
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "text.disabled",
                    fontSize: "12px",
                    width: "100%",
                  }}
                  {...bindTrigger(popupState)}
                >
                  Popularity Descending
                </Button>
                <Menu
                  {...bindMenu(popupState)}
                  style={{ width: "100%", fontSize: "12px" }}
                >
                  <MenuItem onClick={popupState.close}>
                    Popularity Descending
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Popularity Ascending
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Popularity Descending
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Popularity Ascending
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Release Date Descending
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Release Date Ascending
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>title</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Where To Watch</Typography>
        </AccordionSummary>
      </Accordion>
      <button className="searchButton">Search</button>
    </div>
  );
};
export default SearchMovies;
