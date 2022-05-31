import React from "react";
import app_config from "../../config";
import "../../stylesheets/footer.css";

const Footer = () => {
  const url = app_config.backend_url;

  return (
    <div>

      <footer
        className="text-center text-white"
        style={{ backgroundColor: "" }}
      >
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                 
                  <img
                    src="https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2020/6/13/8/49/41/solar_energy.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://energysavingcorporation.com/wp-content/uploads/2018/10/solar-panel-installation0-1024x576.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.fQ_xktPl1qeQeMgF-BF_pgHaEK&pid=Api&P=0&w=294&h=165"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(51, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://www.clean-energy-ideas.com/wp-content/uploads/2019/03/solar-energy-benefits.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://lightingequipmentsales.com/wp-content/uploads/2018/08/Solar-Panel.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="http://www.lifegate.com/app/uploads/Disney.jpg"
                    className="w-100"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
</div>
</section>
</div>
</footer>
      <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <a href="/home"><img src={url + "/images/logo3.png"} alt="logo" /></a>
                     <ul class="social_icon">
                        <li><a href="https://www.facebook.com/go0solar" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                        <li><a href="tel:9554840841" target="_blank"><i class="fa fa-phone" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/loc_chik" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <h3>About Us</h3>
                     <ul class="about_us">
                        <li>187, Pakari, Shohratgarh, SiddharthNagar, UP-272205, India</li>
                     </ul>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <h3>Contact Us</h3>
                     <ul class="conta">
                        <li><a class = " link text-light" href="/main/contactus"> Click Here!!</a> </li>
                     </ul>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <form class="bottom_form">
                        <h3>Newsletter</h3>
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button class = "sub_btn">Subscribe</button>
                     </form>
                  </div>
               </div>

            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p>© 2022 All Rights Reserved. Design by<a href="https://instagram.com/amn_y_v"> Click HERE!!</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </div>
    
  );
};

export default Footer;
