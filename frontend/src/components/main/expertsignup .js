import { Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import app_config from "../../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = app_config.backend_url;

  // for using formik
  // 1. object for initializing which should match with model
  const userForm = {
    email: "",
    password: "",
    username: "",
    age: 0,
  };
  // 2. create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1.Address
    // 2.Request method
    // 3.Data
    // 4.Data format

    fetch(url + "/user/add", {
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
          text: "Registered Successfully",
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
    <section className="">
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 1%, 99%)" }}
      />
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              <span className="text-primary">Signup Here</span>
            </h1>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5">
                
                <Formik initialValues={userForm} onSubmit={userSubmit}>
                  {({ values, handleSubmit, handleChange, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <TextField
                            className="mt-3"
                            label="Email Address"
                            variant="outlined"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <TextField
                            className="mt-3"
                            label="Password"
                            type="password"
                            variant="outlined"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-6">
                      <TextField
                        className="mt-3"
                        label="Username"
                        type="text"
                        variant="outlined"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                      />
                      </div>
                      <div className="col-md-6">
                      <TextField
                        className="mt-3"
                        label="Age"
                        type="number"
                        variant="outlined"
                        id="age"
                        value={values.age}
                        onChange={handleChange}
                      />
                      </div>
                      </div>
                      

                      
                      <br></br>
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example33"
                          checked
                        />
                        
                        <label
                          className="form-check-label"
                          for="form2Example33"
                        >
                          Subscribe to our newsletter
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign Up
                      </button>

                      <div className="text-center">
                       
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1 btn-lg"
                        >
                          <a href="https://www.fb.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                          
                        </button>
                        
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1 btn-lg"
                        >
                         <a href="https://www.google.com" target="_blank"><i className="fab fa-google"></i></a>
                        </button>

                        
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1 btn-lg"
                        >
                          <a href="https://www.github.com" target="_blank"><i className="fab fa-github"></i></a>
                        </button>
                      </div>
                     
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
