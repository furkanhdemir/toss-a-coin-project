import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import yazi from "../images/1-lira-yazi.png";
import tura from "../images/1-lira-tura.png";
import { Button } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";
import "./style.css";
import Spin from "./Spin";

function Homepage() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            position: "relative",
            background: "#2E3B55",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ONLİNE KURA ÇEK
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{
            padding: 10,
            border: "2px solid #dddddd",
            borderRadius: "15px",
            backgroundColor: "#dddddd",
          }}
        >
          {
            <ImageListItem>
              <div className="coin" id="coin">
                <img
                  className="yazi"
                  src={yazi}
                  alt="yazi"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <img
                  className="tura"
                  src={tura}
                  alt="tura"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>

              <Typography variant="h5" style={{ paddingTop: "25px" }}>
                Yazı Tura At
              </Typography>
              <Button
                onClick={() => {
                  Spin();
                }}
                className="flip-button"
                id="flip-button"
                variant="contained"
                disableElevation
                loading="lazy"
                style={{
                  borderRadius: 10,
                  backgroundColor: "#800080",
                  padding: "8px 16px",
                  top: "25px",
                  fontSize: "16px",
                }}
              >
                Şansını Dene
              </Button>
            </ImageListItem>
          }
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
