import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { getPersonajesById } from "../api/characters";
import { getComicsById } from "../api/comics";
import RelatedComics from "../components/detailComponents/RelatedComics";
import { colors } from "../styles/colors";
const ElementDetail = () => {
  const { state, pathname } = useLocation();
  const [elementDetail, setElementDetail] = useState({});

  const id = state ? state.element.id : pathname.split("/")[3];
  const dataType = state ? state.dataType : pathname.split("/")[1];

  useEffect(() => {
    if (!state && dataType === "personajes") {
      getPersonajesById(id).then((res) => {
        setElementDetail(res);
      });
    } else if (!state && dataType === "comics") {
      getComicsById(id).then((res) => {
        setElementDetail(res);
      });
    } else {
      setElementDetail(state.element);
    }
    console.log(state.element);
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginY: 2 }}>
        {elementDetail.title ? elementDetail.title : elementDetail.name}
      </Typography>
      {elementDetail.prices && (
        <Typography
          sx={{ color: colors.marvelRed, textAlign: "center", marginBottom: 5 }}
          variant="h4"
        >
          Price: ${elementDetail.prices[0].price}
        </Typography>
      )}

      <Card
        sx={{
          maxWidth: 500,
          margin: "0 auto",
          border: 1,
        }}
      >
        <CardMedia
          component="img"
          image={`${elementDetail.thumbnail?.path}.${elementDetail.thumbnail?.extension}`}
          alt="Paella dish"
        />
      </Card>

      <Typography variant="h5" sx={{ marginTop: 5, marginBottom: 2 }}>
        Description
      </Typography>
      <Typography variant="p" sx={{ marginBottom: 5 }}>
        {elementDetail.description !== ""
          ? elementDetail.description
          : `Ups, there's no description!`}
      </Typography>

      {dataType === "personajes" && (
        <RelatedComics comics={elementDetail.comics?.items} />
      )}
    </Box>
  );
};

export default ElementDetail;
