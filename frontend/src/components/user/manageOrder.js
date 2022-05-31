import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app_config from '../../config';

const ManageOrder = () => {
    const navigate = useNavigate();

    const url = app_config.backend_url;
  
    const [orders, setOrders] = useState([]);
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem("user"))
    );
    const [loading, setLoading] = useState(true);
  
    const fetchData = () => {
      fetch(url + "/order/getbyuser/" + currentUser._id).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setOrders(data);
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
        return orders.map((order) => (
          <Accordion>
              <AccordionSummary>
                <p>{order.product.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                  <div class='container'>
                  <p>{order.product.price}</p>
                  </div>  
              </AccordionDetails>
          </Accordion>
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
export default ManageOrder