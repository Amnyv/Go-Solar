import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { AccountCircle, Dashboard } from "@mui/icons-material";
import Header from "./header";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
  ];

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Admin;
