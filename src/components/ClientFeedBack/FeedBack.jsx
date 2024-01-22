import React, { Component } from "react";
import Slider from "react-slick";
import user1 from "/public/user1.webp";
import { SampleNextArrow, SamplePrevArrow } from "../../custom_Slick/Custom_slick";




export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="custom_bg">
        <div className="container">
          <div className="row p-5">
            <h2 className="fw-bold fs-1  text-center">Client Feedback</h2>
            <p className="fs-5 py-3 opacity-75  text-center">There are many variations of passages of Lorem Ipsum available</p>

            <Slider {...settings}>
              <div className="position-relative">
                <p className="custom_paragh fs-4">
                  Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                </p>
                <div className="d-flex align-items-center">
                  <img src={user1} alt="" />
                  <div className="ps-4">
                    <h5 className="text-primary">Regan Rosen</h5>
                    <span>Client</span>
                  </div>
                </div>
              </div>
              <div className="position-relative">
                <p className="custom_paragh fs-4">
                  Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                </p>
                <div className="d-flex align-items-center">
                  <img src={user1} alt="" />
                  <div className="ps-4">
                    <h5 className="text-primary">Regan Rosen</h5>
                    <span>Client</span>
                  </div>
                </div>
              </div>
              <div className="position-relative">
                <p className="custom_paragh fs-4">
                  Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                </p>
                <div className="d-flex align-items-center">
                  <img src={user1} alt="" />
                  <div className="ps-4">
                    <h5 className="text-primary">Regan Rosen</h5>
                    <span>Client</span>
                  </div>
                </div>
              </div>
              <div className="position-relative">
                <p className="custom_paragh fs-4">
                  Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                </p>
                <div className="d-flex align-items-center">
                  <img src={user1} alt="" />
                  <div className="ps-4">
                    <h5 className="text-primary">Regan Rosen</h5>
                    <span>Client</span>
                  </div>
                </div>
              </div>
              <div className="position-relative">
                <p className="custom_paragh fs-4">
                  Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna sed do eiusll tempor dolore.
                </p>
                <div className="d-flex align-items-center">
                  <img src={user1} alt="" />
                  <div className="ps-4">
                    <h5 className="text-primary">Regan Rosen</h5>
                    <span>Client</span>
                  </div>
                </div>
              </div>
            </Slider>
          
          </div>
        </div>
      </div>
    );
  }
}
