import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ExpertAuthorisor = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("expert"))
  );

  console.log(currentUser);

  if (!currentUser) {
    Swal.fire({
      icon: "info",
      title: "OOops!!",
      text: "You need to be logged in",
    });
    return <Navigate to="/main/expertlogin" />;
  }

  return children;
};

export default ExpertAuthorisor;
