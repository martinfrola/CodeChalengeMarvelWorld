import axios from "axios";
import { URL, hash, ts, PUBLIC_KEY } from "./config";

export const getAllComics = async (offsetValue) => {
  try {
    const res = await axios.get(URL + "v1/public/comics", {
      params: {
        apikey: PUBLIC_KEY,
        ts,
        hash,
        limit: 20,
        offset: offsetValue,
      },
    });
    return res.data.data.results;
  } catch (error) {
    alert(error.message);
  }
};

export const getComicsById = async (id) => {
  try {
    const res = await axios.get(URL + `v1/public/comics/${id}`, {
      params: {
        apikey: PUBLIC_KEY,
        ts,
        hash,
      },
    });
    return res.data.data.results[0];
  } catch (error) {
    alert(error.message);
  }
};
