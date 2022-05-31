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

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const url = app_config.backend_url;

  const loginForm = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/seller/authenticate", {
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
          sessionStorage.setItem("seller", JSON.stringify(data));
          navigate("/seller/addequipment");
          return;
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
                <p className="text-center text-muted">GO SOLAR</p>
                <h3 className="mb-5">Seller Login Here</h3>

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
                          className="w-100"
                          id="password"
                          type="password"
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
                    </form>
                  )}
                </Formik>
                <p className="mt-4">
                  Not Registered Yet?{" "}
                  <Link to="/main/sellersignup">Click Here</Link>
                </p>
                <hr className="my-4" />
                <a class= "l-link" href="/main/resetpassword">
                            {" "}
                            Forget password ?
                          </a>
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
      " url(https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default Login;
