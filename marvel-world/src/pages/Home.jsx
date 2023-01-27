import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllCharacters } from "../api/characters";
import { getAllComics } from "../api/comics";
import { useState } from "react";
import Main from "../components/homeComponents/Main";
import {
  Typography,
  Pagination,
  Box,
  IconButton,
  Paper,
  InputBase,
} from "@mui/material";
import Carrousel from "../components/generalComponents/Carrousel";
import SearchIcon from "@mui/icons-material/Search";
const Home = () => {
  const dataType = useOutletContext();
  const [elements, setElements] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    setLoading(true);
    if (dataType === "personajes") {
      getAllCharacters(0).then((res) => {
        setElements(res);
        setLoading(false);
      });
    } else {
      getAllComics(0).then((res) => {
        setElements(res);
        setLoading(false);
      });
    }
  }, [dataType]);

  const handleChange = (event, value) => {
    setPage(value);
    setLoading(true);
    const offsetValue = 20 * value;
    if (dataType === "personajes") {
      getAllCharacters(offsetValue).then((res) => {
        setElements(res);
        setLoading(false);
      });
    } else {
      getAllComics(offsetValue).then((res) => {
        setElements(res);
        setLoading(false);
      });
    }
  };

  return (
    <Box>
      <Carrousel />
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginY: 3, fontWeight: "bold" }}
      >
        Listado de {dataType}
      </Typography>
      <Main elements={elements} loading={loading} />
      <Pagination
        sx={{ display: "flex", justifyContent: "center", paddingY: 5 }}
        count={10}
        defaultPage={1}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
};

export default Home;
