import { Formik } from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import app_config from "../../config";
import Swal from "sweetalert2";
import { useState } from "react";


const Update = (props) => {
  const url = app_config.api_url;
  const [hero, setHero] = useState("");
  const [equipFile, setEquipFile] = useState("");

  const formSubmit = (values) => {
    console.log(values);
    //  values.heroimage = hero;
    // values.file = equipFile;

    const reqOp = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    fetch(url + "equipment/update/" + props.formdata._id, reqOp)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message == "success") {
          Swal.fire({
            icon: "success",
            title: " Updated Successfully!!",
          });
        }
      });
  };

  const uploadheroimage = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/addfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHero(event.target.files[0].name);
      });
  };

  const uploadfile = (event) => {
    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    const reqOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(url + "util/createfile", reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEquipFile(event.target.files[0].name);
      });
  };

  return (
    <div class="col-xl-6">
    <div class="card-body p-md-5 text-black">
      <h3 class="mb-4 text-uppercase">Update Data</h3>
      <Formik initialValues={props.formdata} onSubmit={formSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>

      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <input type="text" id="title" class="form-control form-control-lg" placeholder="title" onChange={handleChange}
          value={values.title} />
            {/* <label class="form-label" for="form3Example1m"></label> */}
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <input type="text" id="description" class="form-control form-control-lg" placeholder="description" onChange={handleChange}
          value={values.description} />
            {/* <label class="form-label" for="form3Example1n">Last name</label> */}
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <input type="text" id="features" class="form-control form-control-lg" placeholder="organisation name"  onChange={handleChange}
          value={values.features}/>
            {/* <label class="form-label" for="form3Example1n">Last name</label> */}
          </div>
        </div>
      </div>

      <div class="form-outline mb-4">
        <input type="text" id="price" class="form-control form-control-lg" placeholder="address" onChange={handleChange}
          value={values.price} />
        {/* <label class="form-label" for="form3Example8">Address</label> */}
      </div>



    

      <div class="d-flex justify-content-end pt-3">
        <button type="submit" class="btn btn-success btn-lg ms-2"
          >Submit</button>
      </div>
      </form>
         )}
         </Formik>
    </div>

  </div>
  

  );
};

export default Update;