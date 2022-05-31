import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const url = app_config.backend_url;

  const loginForm = {
    email: "",
    passworsd: "",
  };
  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Successfully loggedin",
        });

        res.json().then((data) => {
          if (data.isAdmin) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/profile");
            return;
          } else {
            sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/user/profile");
            return;
          }
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };

  return (
    <section className="vh-100" style={styles.container}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Login Here</h3>

                <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <TextField
                          className="w-100"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                          label="Email"
                          variant="outlined"
                          maxwidth
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <TextField
                        type= "password"
                          className="w-100"
                          id="password"
                          value={values.password}
                          onChange={handleChange}
                          label="Password"
                          variant="outlined"
                          maxwidth
                        />
                      </div>
                      <div className="form-check d-flex justify-content-start mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                        />
                        <label className="form-check-label" for="form1Example3">
                          {" "}
                          Remember password{" "}
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                      <br></br>
                      OR
                      <br></br>
                      <a class = "l-link" href="/main/signup">
                        Sign Up
                      </a> 
                      <hr className="my-4" />
                      <a class = "l-link" href="/main/resetpassword">
                     Forget password
                   </a>
                    </form>
                     
                  )}
                </Formik>
               


                {/* <button
                  class="btn btn-lg btn-block btn-primary"
                  style={{ backgroundColor: "#dd4b39" }}
                  type="submit"
                >
                  <i className="fab fa-google me-2"></i> Sign in with google
                </button> */}
                {/* <button
                  className="btn btn-lg btn-block btn-primary mb-2"
                  style={{ backgroundCcolor: "#3b5998" }}
                  type="submit"
                >
                  <i className="fab fa-facebook-f me-2"></i>Sign in with
                  facebook
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    background:

      "url(http://localhost:5000/images/banner.jpg)",

     

    backgroundSize: "cover",
    backgroundPosition: "cover",
  },
};

export default Login;
