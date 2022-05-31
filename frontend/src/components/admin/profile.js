import "./profile.css"
import Sidebar from "./sidebar";

import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  makeStyles,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const AdminProfile = (props) => {
  const [loading, setLoading] = useState(true);
  const [updateForm, setUpdateForm] = useState({});
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );
  const [selImage, setSelImage] = useState("");
  const url = app_config.backend_url;

  useEffect(() => {
    fetch(url + "/user/getbyid/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateForm(data);
      });
    console.log(currentUser);
  }, []);

  const onFormSubmit = (value, { setSubmitting }) => {
    fetch(url + "/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setCurrentUser(data);
          sessionStorage.setItem("admin", JSON.stringify(data));
        });
      }
      Swal.fire({
        icon: "success",
        title: "Welldone!",
        text: "You have successfully Updated",
      });
    });
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        fetch(url + "/user/update/" + currentUser._id, {
          method: "PUT",
          body: JSON.stringify({ avatar: file.name }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            res.json().then((data) => {
              console.log(data);
              setCurrentUser(data);
              sessionStorage.setItem("admin", JSON.stringify(data));
            });
          }
          Swal.fire({
            icon: "success",
            title: "Welldone!",
            text: "You have successfully Updated",
          });
        });
        toast.success("Image Uploaded!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };

  return (
    
    <div>
      <body>

    <div id="wrapper" class="toggled">

        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Admin Panel
                    </a>
                </li>
                <li>
                    <a href="/admin/profile">Profile</a>
                </li>
                <li>
                    <a href="/admin/addexpert">AddExpert</a>
                </li>
                <li>
                    <a href="/admin/manageuser">Manage User</a>
                </li>
                <li>
                    <a href="/admin/dashboard">Dashboard</a>
                </li>
            </ul>
        </div>
        {/* <!-- /#sidebar-wrapper -->

        <!-- Page Content --> */}
        <div className="col-md-10 mx-auto" >
      <section class="vh-100" style={{backgroundColor: "#f4f5f7",
    backgroundImage : "url(http://localhost:5000/images/banner.jpg)"}}>
  <div class="container-fluid py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style={{borderRadius: ".5rem"}}>
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style={{orderTopLeftRadius: ".5rem", 
              borderBottomLeftRadius: ".5rem"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" class="img-fluid my-5" style={{width: "80px" }}/>
              <h5>{currentUser.username}</h5>
              <p>ADMIN</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Admin Profile</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <p class="text-muted">{currentUser.email}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <p class="text-muted">555555555</p>
                  </div>
                </div>
                <h6>Projects</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>Recent</h6>
                    <p class="text-muted">Manage Backend</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p class="text-muted">Error Solving</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start">
                  <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
       {/*  <!-- /#page-content-wrapper --> */}

    </div>
   {/*  <!-- /#wrapper -->

    <!-- Menu Toggle Script --> */}
   

  
</body>
    
   
    </div>
  );
};

export default AdminProfile;
