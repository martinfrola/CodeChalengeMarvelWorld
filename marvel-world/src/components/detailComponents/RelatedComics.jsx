import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  CircularProgress,
  Card,
  CardMedia,
} from "@mui/material/";
import { getComicsById } from "../../api/comics";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const RelatedComics = ({ comics }) => {
  const [loading, setLoading] = useState(false);
  const [comicInfo, setComicInfo] = useState({});

  const handleInfo = async (url) => {
    setLoading(true);
    const id = url.split("/")[6];
    const res = await getComicsById(id);
    setComicInfo(res);
    setLoading(false);
  };
  return (
    <Box sx={{ with: "80%" }}>
      <Typography variant="h6" sx={{ marginY: 5 }}>
        Related Comics
      </Typography>
      {comics &&
        comics.length > 0 &&
        comics.map((comic) => (
          <Accordion key={comic.name}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={() => handleInfo(comic.resourceURI)}
            >
              <Typography>{comic.name}</Typography>
            </AccordionSummary>
            {loading ? (
              <CircularProgress />
            ) : (
              <AccordionDetails>
                <Card
                  sx={{
                    maxWidth: 300,
                    margin: "0 auto",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`${comicInfo.thumbnail?.path}.${comicInfo.thumbnail?.extension}`}
                    alt="Paella dish"
                  />
                </Card>
                <Typography>
                  {comicInfo.description && comicInfo.description}
                </Typography>
              </AccordionDetails>
            )}
          </Accordion>
        ))}
    </Box>
  );
};

export default RelatedComics;
