import React from "react";
import { Button } from "react-bootstrap";
import blogs from "/public/blogs1.webp";
import blogs2 from "/public/blogs2.webp";
import blogs3 from "/public/blogs3.webp";
import side_image from "/public/side-image.webp";
import singalBlog from "/public/singalBlog.webp";

const BlogPages = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
            <div className="input-group mb-3 position-relative">
              <input type="text" className="form-control p-3" placeholder="Search" aria-label="" aria-describedby="basic-addon1" />
              <i className="bi bi-search fs-4 position-absolute pt-2" style={{ right: "20px" }}></i>
            </div>
            <div className="card">
              <div className="card-body px-4">
                <div>
                  <h5 className="card-title pb-3 border-bottom">Categories</h5>
                  <p className="card-text">Accesasories (6)</p>
                  <p className="card-text">Computer (4)</p>
                  <p className="card-text">Covid-19 (5)</p>
                  <p className="card-text">Electronics (3)</p>
                  <p className="card-text">Frame Sunglasses(7)</p>
                  <p className="card-text">Furniture (9)</p>
                  <p className="card-text">Genuine Leather (8)</p>
                </div>
                <div className="mt-4">
                  <h5 className="card-title pb-3 border-bottom">Recent Post</h5>
                  <div className="card border-0 mt-4">
                    <div className="d-flex justify-content-center">
                      <div>
                        {" "}
                        <img className=" rounded-4" src={blogs} alt="Card image cap" />
                      </div>
                      <div className="card-body p-0 ps-3">
                        <p className="card-text mb-0">
                          <i className="bi bi-calendar3 pe-2"></i>27 jun, 2022
                        </p>
                        <p className="card-text">Lorem ipsum dolorl amet conse adip</p>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 mt-4">
                    <div className="d-flex justify-content-center">
                      <div>
                        {" "}
                        <img className=" rounded-4" src={blogs2} alt="Card image cap" />
                      </div>
                      <div className="card-body p-0 ps-3">
                        <p className="card-text mb-0">
                          <i className="bi bi-calendar3 pe-2"></i>27 jun, 2022
                        </p>
                        <p className="card-text">Lorem ipsum dolorl amet conse adip</p>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 mt-4">
                    <div className="d-flex justify-content-center">
                      <div>
                        {" "}
                        <img className=" rounded-4" src={blogs3} alt="Card image cap" />
                      </div>
                      <div className="card-body p-0 ps-3">
                        <p className="card-text mb-0">
                          <i className="bi bi-calendar3 pe-2"></i>27 jun, 2022
                        </p>
                        <p className="card-text">Lorem ipsum dolorl amet conse adip</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h5 className="card-title pb-3 border-bottom">Archives</h5>
                  <p className="card-text">March 2018</p>
                  <p className="card-text">February 2018</p>
                  <p className="card-text">January 2021</p>
                  <p className="card-text">September 2019</p>
                  <p className="card-text">March 2018</p>
                  <p className="card-text">July 2021</p>
                </div>
                <div className="mt-5">
                  <h5 className="card-title pb-3 border-bottom">Popular Tag</h5>
                  <div className="mb-3 mt-3">
                    <Button variant="light" className="border me-4">
                      Mobile
                    </Button>
                    <Button variant="light" className="border">
                      Laptop
                    </Button>
                  </div>
                  <div className="mb-3">
                    <Button variant="light" className="border me-4">
                      Smart TV
                    </Button>
                    <Button variant="light" className="border">
                      Pendrive
                    </Button>
                  </div>
                  <div className="mb-3">
                    <Button variant="light" className="border me-4">
                      Smartwatch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 mb-4">
            <div className="card border-0">
              <img src={singalBlog} className="card-img-top" alt="..." />
              <div className="card-body d-flex">
                <div className="d-flex">
                  <i className="bi bi-calendar3 pe-2 text-primary"></i>
                  <p className="card-text">27,Jun 2030</p>
                </div>
                <div className="d-flex ps-3">
                  <i className="bi bi-person-fill pe-2 text-primary"></i>
                  <p className="card-text">Oaklee Odom</p>
                </div>
              </div>
            </div>
            <div>
              <h2>10 Principles of Psychology You Can Use to Improve Your Smart Product</h2>
              <p className="py-4 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="p-5 bg-primary text-light customShap position-relative">
              <h6 className="opacity-75 pb-3">Lorem ipsum dolor sit amet, consectetur adipisici elit sed do eiusmod tempor incididunt ut</h6>
              <h3 className="custom_shap position-relative opacity-75">Elmer Schmidt</h3>
            </div>
            <div className=" py-5 fs-5">
              <span className="opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </span>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                <span style={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet, consec adipisic elit, sed do eius tempor incididu ut labore et dolore ma aliqua Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nil ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat
                  velit esse cillum dolore
                </span>
                <br />
                <br />
                <span style={{ fontSize: "18px" }}>
                  leu fugiat nulla pariatur. Excepteur sintocca cupidatat non proident, sunt in culpa qui off deserunt mollit anim id est laborum. Sed
                  utl perspiciatis unde omnis iste natus error sit voluptatem accusantium
                </span>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
                <img className="card-img-top" src={side_image} alt="" />
              </div>
            </div>
            <div>
              <span style={{ fontSize: "18px" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eto dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamcol laboris nisi ut aliquipp ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit inloifk voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </span>
            </div>

            <div className="py-2 border-bottom border-top my-5">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 pt-3">
                  <ul style={{ listStyle: "none",paddingLeft:'0' }} className='d-flex'>
                    <li >Tages:</li>
                    <li className="px-2">
                      <a href="">Mobile,</a>
                    </li>
                    <li className="px-1">
                      <a href="">Laptop,</a>
                    </li>
                    <li className="px-1">
                      <a href="">Smart TV</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 pt-3">
                  <ul style={{ listStyle: "none",paddingLeft:'0' }} className='d-flex'>
                    <li>Share:</li>
                    <li className='px-2'>
                      <a href="">
                        <i className="bi bi-facebook fs-5"></i>
                      </a>
                    </li>
                    <li className='px-2'>
                      <a href="">
                        <i className="bi bi-twitter fs-5"></i>
                      </a>
                    </li>
                    <li className='px-2'>
                      <a href="">
                        <i className="bi bi-pinterest fs-5"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPages;
