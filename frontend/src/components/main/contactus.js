import { Formik } from 'formik';
import React from 'react';
import app_config from "../../config";


const Contactus = () => {
    const url = app_config.backend_url;


    
  return (

    <div>
         <div class="main-layout inner_posituong contact_page">
     {/*  <!-- loader  --> */}
      {/* <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#" /></div>
      </div> */}
      {/* <!-- end loader -->
      <!-- header --> */}
      <header>
         {/* <!-- header inner --> */}
         <div class="header">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                              <a href="/home"><img src={url + "/images/logo3.png"} alt="logo" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item ">
                                 <a class="nav-link" href="/home">Home</a>
                              </li>
                             {/*  <li class="nav-item">
                                 <a class="nav-link" href="about.html">About</a>
                              </li> */}
                              <li class="nav-item">
                                 <a class="nav-link" href="/main/browseEquipment">Panels</a>
                              </li>
                              <li class="nav-item">
                                 <a class="nav-link" href="/main/browseEquipment">Products</a>
                              </li>
                              {/* <li class="nav-item">
                                 <a class="nav-link" href="product.html">Products</a>
                              </li> */}
                              <li class="nav-item active">
                                 <a class="nav-link" href="/main/contactus">Contact Us</a>
                              </li>
                              {/* <li class="nav-item d_none">
                                 <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                              </li> */}
                              <li class="nav-item d_none">
                                 <a class="nav-link" href="/main/login">Login</a>
                              </li>
                              
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
     {/*  <!-- end header inner -->
      <!-- end header -->
      <!--  contact --> */}
      <Formik>
      <div class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Contact Now</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <form id="request" class="main_form">
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="contactus" placeholder="Name" type="type" name="Name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                        </div>
                        <div class="col-md-12">
                           <textarea class="textarea" placeholder="Message" type="type" name="message">Message </textarea>
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end contact -->
      <!--  footer --> */}
     {/*  <!-- end footer -->
      <!-- Javascript files--> */}
    </Formik> 
   </div>
    </div>
  )
}

export default Contactus;