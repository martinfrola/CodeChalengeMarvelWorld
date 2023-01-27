import React, { lazy, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/generalComponents/Header";
import "../styles/main.css";

const Layout = () => {
  const Footer = lazy(() => import("../components/generalComponents/Footer"));

  const [dataType, setDataType] = useState("personajes");

  const changeType = (newType) => {
    setDataType(newType);
  };

  return (
    <div className="app-container">
      <Suspense>
        <Header setType={(data) => changeType(data)} />
        <div className="main">
          <Outlet context={dataType} />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
