import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../components/generalComponents/Footer";
import Header from "../components/generalComponents/Header";
import "../styles/main.css";

const Layout = () => {
  const { state } = useLocation();
  const [dataType, setDataType] = useState("personajes");
  useEffect(() => {
    if (state) {
      setDataType(state.dataType);
    }
  }, []);
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
