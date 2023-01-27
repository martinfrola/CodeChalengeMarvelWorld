import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../styles/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.marvelRed,
        height: 60,
        alignItems: "center",
        textAlign: "center",
        paddingY: 3,
        color: "white",
      }}
    >
      <Typography>
        API:{" "}
        <Link
          sx={{ color: "white" }}
          href="https://developer.marvel.com/"
          _target="blank"
        >
          https://developer.marvel.com/{" "}
        </Link>
      </Typography>
      <Typography>by Martín Frola</Typography>
    </Box>
  );
};

export default Footer;
