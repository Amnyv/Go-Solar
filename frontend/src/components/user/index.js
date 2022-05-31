import { Dashboard } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const User = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/user/dashboard",
    },
  ];

  return (
    <div>
      {/* <Sidebar sidebarOptions={sidebarOptions} title="User Dashboard">
      </Sidebar> */}
      <Header />
      <Outlet />
    </div>
  );
};

export default User;
