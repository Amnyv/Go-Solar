
//import React from 'react'
import { Search } from "@mui/icons-material";
import {
  InputAdornment,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/browseEquipment.css";

const BrowseEquipment = () => {
  
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/equipment/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({ title, description, image, features, price, seller, _id }) => (
          <div key={_id} class="col-md-6 col-lg-3 mb-4 mb-lg-0 ">
            <Card>
              <CardMedia
                component="img"
                image={url + "/uploads/" + image}
                height={400}
              />
              <CardContent className="card-body">
                <p className="text-muted h4">{title}</p>
                <h2 className="float-end">₹ {price}</h2>
                <br />
                <hr />
                <Button
                  variant="contained"
                  className="mt-5 w-100"
                  onClick={(e) => {
                    sessionStorage.setItem(
                      "product",
                      JSON.stringify({
                        title,
                        description,
                        image,
                        features,
                        price,
                        seller,
                        _id,
                      })
                    );
                    navigate("/main/payment");
                  }}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </div>
        )
      );
    }
  };

  const applyfilter = () => {};

  return (
    <div>
      <div>
        <img
          class="w-100"
          src="https://cdn.shopify.com/s/files/1/2980/5140/files/desktop_banner_-_3_5a730f81-fb4f-4a4f-9910-727963303dfa_1600x.png?v=1627145304"
          alt=""
        />
        <div className="container-fluid">
          <img
            class="w-100"
            src="https://cdn.shopify.com/s/files/1/2980/5140/collections/loom_solar_banner_1200x.jpg?v=1641970493"
            alt=""
          />
          <div className="container">
            <div className="row mt-5">{displayData()}</div>
          </div>
        </div>
        <div class="wrapper">
          <div class="header">
            <div className="container"></div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

const styles = {
  header: {
    // background:
    //   "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "2rem",
    textShadow: "2px 2px 3px #0000005c",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default BrowseEquipment;
