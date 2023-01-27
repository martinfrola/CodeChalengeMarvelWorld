import React from "react";
import CardElement from "./CardElement";
import { Grid, Skeleton } from "@mui/material";
const Main = ({ elements, loading }) => {
  const skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Grid container spacing={2}>
      {loading
        ? skeletonNumber.map((skeleton) => (
            <Grid key={skeleton} item xl={3} lg={4} md={6} xs={12}>
              <Skeleton
                variant="rectangular"
                width={300}
                height={300}
                sx={{ margin: "0 auto" }}
              />
            </Grid>
          ))
        : elements?.length > 0 &&
          elements.map((element) => (
            <Grid key={element.id} item xl={3} lg={4} md={6} xs={12}>
              <CardElement element={element} />
            </Grid>
          ))}
    </Grid>
  );
};

export default Main;
