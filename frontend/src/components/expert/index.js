import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Expert = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Expert;
