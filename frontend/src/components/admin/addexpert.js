import { Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import app_config from "../../config";
import Swal from "sweetalert2";

const AddExpert = () => {
  const url = app_config.backend_url;

  // for using formik
  // 1. object for initializing which should match with model
  const userForm = {
    name: "",
    qualification: "",
    occupation: "",
    experience: 0,
    mainareaofexperience: "",
    email: "",
    password: "",
  };
  // 2. create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1.Address
    // 2.Request method
    // 3.Data
    // 4.Data format

    fetch(url + "/expert/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Expert Added Successfully!!",
        });
      });
  };

  //   3. Create Formik Component inside JSX

  //   4. Create Validation Schema
  const myvalidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });

  return (
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
    <div style={styles.container}>
      <div className="row align-item-center h-100 m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="mb-0">Add New Expert</h3>
            </div>
            <div className="card-body">
              <Formik
                initialValues={userForm}
                onSubmit={userSubmit}
                // validationSchema={myvalidation}
              >
                {({ values, handleSubmit, handleChange, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="mt-3 w-100"
                      label="Full Name"
                      variant="outlined"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      // helperText={errors.email}
                      // error={Boolean(errors.email)}
                    />
                    <TextField
                      className="mt-3 w-100"
                      label="Qualification"
                      variant="outlined"
                      id="qualification"
                      value={values.qualification}
                      onChange={handleChange}
                      // helperText={errors.email}
                      // error={Boolean(errors.email)}
                    />
                    <TextField
                      className="mt-3 w-100"
                      label="Overall Experience"
                      variant="outlined"
                      id="experience"
                      value={values.experience}
                      onChange={handleChange}
                      // helperText={errors.email}
                      // error={Boolean(errors.email)}
                    />
                    <TextField
                      className="mt-3 w-100"
                      label="Main Area of Expertise"
                      variant="outlined"
                      id="mainareaofexperience"
                      value={values.mainareaofexperience}
                      onChange={handleChange}
                      // helperText={errors.email}
                      // error={Boolean(errors.email)}
                    />
                    <TextField
                      className="mt-3 w-100"
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      // helperText={errors.password}
                      // error={Boolean(errors.password)}
                    />
                    <TextField
                      className="mt-3 w-100"
                      label="Password"
                      type="password"
                      variant="outlined"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      // helperText={errors.password}
                      // error={Boolean(errors.password)}
                    />

                    <Button type="submit" className="mt-3" variant="contained">
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div style={{ height: "100%", padding: "5rem" }}>
            <img
              className="img-fluid"
              alt=""
              src="https://minutes.co/wp-content/uploads/2019/04/shutterstock_323897318.png"
            />
          </div>
        </div>
      </div>
    </div>
   {/*  <!-- /#page-content-wrapper --> */}

</div>
{/* <!-- /#wrapper -->

<!-- Menu Toggle Script --> */}

</body>

    
   
  );
};

const styles = {
  container: {
    background: "#d3e9f7",
    height: "100vh",
  },
};
export default AddExpert;
