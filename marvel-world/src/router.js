import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ElementDetail from "./pages/ElementDetail";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:dataType/detail/:id",
        element: <ElementDetail />,
      },
    ],
  },
]);
