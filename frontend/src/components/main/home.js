import React from "react";
import { Link, NavLink } from "react-router-dom";
import app_config from "../../config";
import "./home.css";

const Home = () => {
  const url = app_config.backend_url;

  return (
    <div>
      <div>
        <div class="main-layout">
          {/* <!-- loader  --> */}
          {/* <div class="loader_bg">
            <div class="loader">
              {" "}
              <img src={url + "/images/loading.gif"} alt="#" />
            </div>
          </div> */}
          <header>
            <div class="header">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                    <div class="full">
                      <div class="center-desk">
                        <div class="logo d-3">
                          <a href="/home">
                            <img src={url + "/images/logo3.png"} alt="logo" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <nav class="navigation navbar navbar-expand-md navbar-dark ">
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample04"
                        aria-controls="navbarsExample04"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarsExample04"
                      >
                        <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="/home">
                              Home
                            </a>
                          </li>

                          <li class="nav-item">
                            <a class="nav-link" href="/main/browseEquipment">
                              Panels
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/main/browseEquipment">
                              Products
                            </a>
                          </li>

                          <li class="nav-item d_none">
                            <Link class="nav-link" to="/main/contactus">
                              Contact Us
                            </Link>
                          </li>
                          {/* <li class="nav-item d_none">
                          <a class="nav-link" href="#">
                            <i class="fa fa-search" aria-hidden="true"></i>
                          </a>
                        </li> */}
                          <li class="nav-item d_none">
                            <Link class="nav-link" to="/main/login">
                              Login
                            </Link>
                          </li>
                          <li class="nav-item d_none">
                            <Link class="nav-link" to="/main/sellerlogin">
                              Seller Login
                            </Link>
                          </li>
                          <li class="nav-item d_none">
                            <Link class="nav-link" to="/main/expertlogin">
                              Expert Login
                            </Link>
                          </li>
                          <li class="nav-item d_none">
                            <Link class="nav-link" to="/main/login">
                              Admin Panel</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section class="banner_main">
            <div id="banner1" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#banner1"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#banner1" data-slide-to="1"></li>
                <li data-target="#banner1" data-slide-to="2"></li>
                <li data-target="#banner1" data-slide-to="3"></li>
                <li data-target="#banner1" data-slide-to="4"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="carousel-caption">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="text-bg">
                            <span>CREATING A GREEN WORLD WITH</span>
                            <h1>SOLAR PANELS</h1>
                            <p>
                              It's time to create a more safe, secure and green
                              world with solar pannels. We provide india's most
                              trusted solar panels and solar products with easy
                              implementation{" "}
                            </p>
                            <a href="/main/browseEquipment">BROWSE </a>{" "}
                            <a href="/main/contactus">Contact </a>{" "}
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="text_img">
                            <figure>
                              <img
                                src="https://www.nexamp.com/wp-content/uploads/2021/03/Brick-Church-Solar-1-18-of-35-1.jpg"
                                alt="#"
                                height="278"
                                width="696"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="carousel-caption">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="text-bg">
                            <span>A MORE ADVANCE</span>
                            <h1>SOLAR PANELS ARE HERE</h1>
                            <p>
                              There are lots of newly launched solar panels are wating for you, just give it a shot!!{" "}
                            </p>
                            <a href="/main/browseEquipment">Buy Now </a>{" "}
                            <a href="/main/contactus">Contact </a>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="text_img">
                            <figure>
                              <img
                                src="https://www.popsci.com/uploads/2021/09/30/The-Best-Solar-Panels-of-2021.jpg?auto=webp"
                                height="278"
                                width="696"
                                alt="#"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="carousel-caption">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="text-bg">
                            <span>MORE ADVANCE </span>
                            <h1>SOLAR PRODUCTS ARE HERE</h1>
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or{" "}
                            </p>
                            <a href="/main/browseEquipment">BROWSE </a>{" "}
                            <a href="/main/contactus">Contact </a>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="text_img">
                            <figure>
                              <img
                                src="https://3.imimg.com/data3/TY/HL/MY-1540554/solar-products-500x500.jpg"
                                height="278"
                                width="696"
                                d37
                                alt="#"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="carousel-caption">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="text-bg">
                            <span>OUR IMPLEMENTATION TEAM WILL</span>
                            <h1>IMPLEMENT AT EASE</h1>
                            <p>
                              Our implementation team will help you to place,
                              implement your solar panels and solar products
                              with secure tools that we provide. All of them are
                              fully vaccinated.
                            </p>
                            <a href="/main/browseEquipment">Buy Now </a>{" "}
                            <a href="/main/contactus">Contact </a>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="text_img">
                            <figure>
                              <img
                                src="https://www.gannett-cdn.com/-mm-/64a133e3e6f411ffa20f76542681fdfd11ff3ceb/c=0-244-4669-2870/local/-/media/2020/10/11/FortSmith/ghows-AR-201019980-b48b53b4.jpg"
                                height="278"
                                width="696"
                                alt="#"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="carousel-caption">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="text-bg">
                            <span>SOLAR PANELS</span>
                            <h1>ACCORDING TO YOUR NEED</h1>
                            <p>
                              We can help you to calculate your electricity need
                              and we can provide best suitable solar panel
                              according to your need. You can contact us for for
                              information{" "}
                            </p>
                            <a href="/user/chat">Chat </a>{" "}
                            <a href="tel: 7860164608">Phone</a>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="text_img">
                            <figure>
                              <img
                                src="https://www.solarreviews.com/content/images/blog/post/focus_images/37_types%20of%20solar%20panels.png"
                                height="278"
                                width="696"
                                alt="#"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#banner1"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#banner1"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </section>

          <div class="three_box">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="box_text">
                    <i>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.2ptMiQziapYmRaMDYSLu4gHaF6&pid=Api&P=0&w=214&h=171"
                        alt="#"
                      />
                    </i>
                    <h3>Solar Attic Fans</h3>
                    <p>
                      All over the world, close to 40% of total residential
                      power usage can be attributed to heating and cooling.Your
                      home and its indoor air quality,Where homes have air
                      conditioning installed, Millionsun can save hundreds of
                      dollars each year by improving the efficiency of your air
                      conditioning system.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box_text">
                    <i>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.52Zc-QdbbimcluC8w7u9DgHaHa&pid=Api&P=0&w=179&h=179"
                        alt="#"
                      />
                    </i>
                    <h3>Solar Lamp</h3>
                    <p>
                      Millionsun integrated solar street light include high
                      lumen LED lamp, LiFePO4 lithium battery, high efficiency
                      sunpower microcrystal solar panel and a smart controller
                      with PIR motion sensor.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="box_text">
                    <i>
                      <img
                        src="https://3.imimg.com/data3/TY/HL/MY-1540554/solar-products-500x500.jpg"
                        alt="#"
                      />
                    </i>
                    <h3>Othere products</h3>
                    <p>
                      We are the largest manufacturer of custom infrared
                      electric heaters for the OEM market. With over 60 years of
                      innovation behind us, we deliver the most well-built and
                      effective infrared heating solutions available on the
                      market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="products">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="titlepage">
                    <h2>Our Products</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="our_products">
                    <div class="row">
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.PT6yxfYGYV8g3V8u611-wgHaHa&pid=Api&P=0&w=169&h=169"
                              alt="#"
                            />
                          </figure>
                          <h3>LIGHTS</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.UllGVJXYtR1BX_d0edPrUQHaHa&pid=Api&P=0&w=165&h=165"
                              alt="#"
                            />
                          </figure>
                          <h3>SENSOR LIGHTS</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.ALFd7ASTiZ-KX5VvlPsd0QHaHa&pid=Api&P=0&w=167&h=167"
                              alt="#"
                            />
                          </figure>
                          <h3>LED LIGHTS</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse2.mm.bing.net/th?id=OIP.qzNPj9H2N-2mkJzpKFl8uwHaGi&pid=Api&P=0&w=186&h=164"
                              alt="#"
                            />
                          </figure>
                          <h3>Decoratives Items</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.6bIxeJBx-ioY6V_MmZYhEwHaHa&pid=Api&P=0&w=167&h=167"
                              alt="#"
                            />
                          </figure>
                          <h3>Hill Lights</h3>
                        </div>
                      </div>
                      <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.UVlk_Xl2YKvmYhgKhtZrlgHaHa&pid=Api&P=0&w=181&h=181"
                              alt="#"
                            />
                          </figure>
                          <h3>Bike Light</h3>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.unZq9kUWHeSHeXdr-pT4ygHaHa&pid=Api&P=0&w=178&h=178"
                              alt="#"
                            />
                          </figure>
                          <h3>Hot Jar</h3>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.Z6C6iHOW3uZdOXdmQlvG5wHaHa&pid=Api&P=0&w=169&h=169"
                              alt="#"
                            />
                          </figure>
                          <h3>Lighted Wrist</h3>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="product_box">
                          <figure>
                            <img
                              src="https://tse3.mm.bing.net/th?id=OIP.DW9ffLdY94CHpQfx5ppf8gHaHa&pid=Api&P=0&w=169&h=169"
                              alt="#"
                            />
                          </figure>
                          <h3>Security Sensored</h3>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <a class="read_more" href="/main/browseEquipment">
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="laptop">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="titlepage">
                    <p>Every solar panel  and Products</p>
                    <h2>Up to 40% off !</h2>
                    <h3 class= "text-light m-4">On your first purchase</h3>
                    <a class="read_more" href="/main/browseEquipment">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="laptop_box">
                    <figure>
                      <img src="https://www.solarreviews.com/content/images/blog/typesofsolarpanels.jpg" alt="#" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="customer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2>Customer Review</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  id="myCarousel"
                  class="carousel slide customer_Carousel "
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="carousel-caption ">
                          <div class="row">
                            <div class="col-md-9 offset-md-3">
                              <div class="test_box">
                                <i>
                                  <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.uxxRIHNTQNINY0C02K-QJgHaHa&pid=Api&P=0&w=160&h=160"
                                    style={{ height: "100px" }}
                                    alt="#"
                                  />
                                </i>
                                <h4>Akash tiwari</h4>
                                <p>
                                  This was my first expireance with this site
                                  and it was awesome! The imlementetion team's
                                  behaviour was good, experts response time was
                                  fine.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="carousel-caption">
                          <div class="row">
                            <div class="col-md-9 offset-md-3">
                              <div class="test_box">
                                <i>
                                  <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.uxxRIHNTQNINY0C02K-QJgHaHa&pid=Api&P=0&w=160&h=160"
                                    style={{ height: "100px" }}
                                    alt="#"
                                  />
                                </i>
                                <h4>Adam mark</h4>
                                <p>Delivery service is awesome!!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="carousel-caption">
                          <div class="row">
                            <div class="col-md-9 offset-md-3">
                              <div class="test_box">
                                <i>
                                  <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.U438qVYBTg2n_5oMr39VRgHaHa&pid=Api&P=0&w=160&h=160"
                                    style={{ height: "100px" }}
                                    alt="#"
                                  />
                                </i>
                                <h4>Suman dixit </h4>
                                <p>Admin service is very good!!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="customer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">-
                
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                id="myCarousel"
                class="carousel slide customer_Carousel "
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="carousel-caption ">
                        <div class="row">
                          <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                              <i>

                                <img
                                  src="https://i.pinimg.com/originals/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg"

                                  style={{ height: "100px" }}
                                  alt="#"
                                />
                              </i>
                              <h4>Neha Dixit</h4>
                              <p>
                                This was my first expireance with this site and
                                it was awesome! The imlementetion team's
                                behaviour was good, experts response time was
                                fine.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="carousel-caption">
                        <div class="row">
                          <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                              <i>
                                <img
                                  src="https://1.bp.blogspot.com/-56qaqnSjSUs/XmDjV_YRBJI/AAAAAAAAPO0/QEKgs_qAvN8rIMgHvWoVq3sKc_v_A11gwCLcBGAsYHQ/s1600/Cute%2BGirl%2BDP%2BImages%2B%252818%2529.jpg"
                                  style={{ height: "100px" }}
                                  alt="#"
                                />
                              </i>
                              <h4>Suman Chauhan</h4>
                              <p>Delivery service is awesome!!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="carousel-caption">
                        <div class="row">
                          <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                              <i>
                                <img
                                  src="https://www.whatsappimages.in/wp-content/uploads/2022/01/Free-Girl-DP-Wallpaper-Pics-Download.jpg"
                                  style={{ height: "100px" }}
                                  alt="#"
                                />
                              </i>
                              <h4>Angel Priya</h4>

                              <p>Admin service is very good!!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#myCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#myCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                        <button>Subscribe</button>
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
export default Home;
