import { useEffect, useState } from "react";
import app_config from "../../config";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
//import "../../stylesheets/browseplatform.css";
import Update from "./update";
import { useNavigate } from "react-router-dom";

const ManageEquipment = () => {
  const navigate = useNavigate();

  const url = app_config.backend_url;

  const [equipments, setEquipments] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("seller"))
  );
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/equipment/getbyseller/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setEquipments(data);
          setLoading(false);
          console.log(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showData = () => {
    if (!loading) {
      return equipments.map((equipment) => (
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://shg-prd.azureedge.net/-/media/shurgard/general/unit-pictures/01dot5-tb.jpg?extension=webp&w=126&h=108&hash=CBB96A06060A707BF07B4250584BB5C8"
              alt=""
            />
            <div className="card-body">
              <p className="text-muted">title</p>
              <h5>{equipment.title}</h5>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="mt-5">Manage Bookings</h1>
        <hr />
        <div className="row">{showData()}</div>
      </div>
    </div>
  );
};

export default ManageEquipment;
