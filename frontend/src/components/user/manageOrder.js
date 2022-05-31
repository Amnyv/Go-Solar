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
      <body>

    <div id="wrapper" class="toggled">

        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                       User Panel
                    </a>
                </li>
                <li>
                    <a href="/user/profile">Profile</a>
                </li>
                <li>
                    <a href="/user/manageOrder">Manage Order</a>
                </li>
                <li>
                    <a href="/user/chat">Chat With Expert</a>
                </li>
                <li>
                    <a href="/main/browseEquipment">Explore Products</a>
                </li>
            </ul>
        </div>
        {/* <!-- /#sidebar-wrapper -->

        <!-- Page Content --> */}
        
      <div>
        <div className="container">
          <h1 className="mt-1">Manage Bookings</h1>
          <hr />
          <div className="row">{showData()}</div>
        </div>
      </div>
      
       {/*  <!-- /#page-content-wrapper --> */}

    </div>
   {/*  <!-- /#wrapper -->

    <!-- Menu Toggle Script --> */}
   

  
</body>
    
   
    </div>



    );
  };
export default ManageOrder