import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { colors } from "../../styles/colors";
const CardElement = ({ element }) => {
  const dataType = useOutletContext();

  return (
    <Link
      to={`${dataType.toLowerCase()}/detail/${element.id}`}
      state={{ element, dataType }}
      className="link-card"
    >
      <Card
        key={element.id}
        sx={{
          width: 300,
          height: 300,
          margin: "0 auto",
          border: 1,
          borderColor: colors.blackBg,
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
          alt="Paella dish"
        />{" "}
        <Typography variant="h5" sx={{ textAlign: "center", paddingTop: 1 }}>
          {element.title
            ? element.title.substring(0, 38)
            : element.name.substring(0, 38)}{" "}
          {element.title?.length > 37 && "..."}
          {element.name?.length > 37 && "..."}
        </Typography>{" "}
        {element.prices && (
          <Typography
            sx={{ color: colors.marvelRed, textAlign: "center" }}
            variant="h6"
          >
            Price: ${element.prices[0].price}
          </Typography>
        )}
      </Card>
    </Link>
  );
};

export default CardElement;
