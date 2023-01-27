import React, { Fragment, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../components/generalComponents/Footer";
import Header from "../components/generalComponents/Header";
import "../styles/main.css";

const Layout = () => {
  const [dataType, setDataType] = useState("personajes");

  const changeType = (newType) => {
    setDataType(newType);
  };

  return (
    <div className="app-container">
      <Header setType={(data) => changeType(data)} />
      <div className="main">
        <Outlet context={dataType} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
