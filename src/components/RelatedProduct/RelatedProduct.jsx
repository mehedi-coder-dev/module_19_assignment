import React, { Component } from "react";
import Slider from "react-slick";
import productImg from "/public/1.webp";
import productImg2 from "/public/2.webp";
import productImg3 from "/public/3.webp";
import productImg4 from "/public/4.webp";
import { SampleNextArrow, SamplePrevArrow } from "../../custom_Slick/Custom_slick";

class RelatedProduct extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow  />,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true,
          },
        },
        {
            breakpoint: 575,
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
      <div className="Featured mb-5 ">
        <div className="container">
          <div className="row">
            <h2 className="card-title fw-bold fs-1 text-center mb-4">Related Products</h2>
            <p className="card-text fs-5 opacity-75 text-center mb-5">There are many variations of passages of Lorem Ipsum available</p>
            <div className="p-4">
            <Slider {...settings} >
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg2} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg3} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg4} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg2} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg3} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="position-relative p-2 b me-3 border rounded a">
                <span className=" bg-dark text-white px-3 p-0 position-absolute fs-0 rounded">New</span>
                <img src={productImg4} className="card-img-top" alt="..." />
                <div className="card-body py-4  w-100 d-flex flex-column align-items-center">
                  <p className="card-text mb-2">Accessories</p>
                  <h5 className="card-title mb-2 fs-6">Modern Smart Phone</h5>
                  <h5 className="card-title opacity-75">$38.50</h5>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center mb-2 bottom_content">
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-bag fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-eye fs-4"></i>
                  </div>
                  <div className="p-2 bg-body-tertiary w-25 d-flex justify-content-center align-items-center rounded custom_hover mx-2">
                    <i className="bi bi-arrow-clockwise fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProduct;
