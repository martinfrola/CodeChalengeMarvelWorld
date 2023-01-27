import React, { useContext, useEffect } from "react";
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import marvelLogo from "../../assests/Images/Marvel_Logo.svg.png";
import { colors } from "../../styles/colors";

const Header = ({ setType }) => {
  const navItems = ["personajes", "comics"];

  const changeType = (newType) => {
    console.log(newType, "Desde el Header");
    setType(newType);
  };

  return (
    <Box sx={{ backgroundColor: colors.blackBg }}>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          width: "85%",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <Link to="/">
          {" "}
          <img height="40px" src={marvelLogo} />
        </Link>

        <List
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={item === "personajes" ? "Personajes" : "Comics"}
                  onClick={() => changeType(item)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Header;
