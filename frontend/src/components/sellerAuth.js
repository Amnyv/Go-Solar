import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SellerAuthorisor = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("seller"))
  );

  console.log(currentUser);

  if (!currentUser) {
    Swal.fire({
      icon: "info",
      title: "OOops!!",
      text: "You need to be logged in",
    });
    return <Navigate to="/main/sellerlogin" />;
  }

  return children;
};

export default SellerAuthorisor;
