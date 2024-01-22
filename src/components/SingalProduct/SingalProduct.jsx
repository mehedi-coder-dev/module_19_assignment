import React, { Component } from "react";
import Slider from "react-slick";
import singalImg from "/public/singal1.webp";

class SingalProduct extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={`https://htmldemo.net/hmart/hmart/assets/images/product-image/small-image/1.webp`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              {" "}
              <div className="border">
                <Slider {...settings} swipeToSlide={false} focusOnSelect={true}>
                  <div className="card border-0">
                    <img className="card-img-top" src={`/public/singal1.webp`} />
                  </div>
                  <div className="card border-0">
                    <img className="card-img-top" src={singalImg} />
                  </div>
                  <div className="card border-0">
                    <img className="card-img-top" src={singalImg} />
                  </div>
                  <div className="card border-0">
                    <img className="card-img-top" src={singalImg} />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="">
                <h2 className="card-title">
                  Modern Smart Phone
                  <br /> $20.90
                </h2>
                <div className="d-flex pb-4 border-bottom pt-3">
                  <div>
                    {" "}
                    <i className="bi bi-star-fill text-warning "></i>
                    <i className="bi bi-star-fill text-warning px-1"></i>
                    <i className="bi bi-star-fill text-warning px-1"></i>
                    <i className="bi bi-star-fill text-warning px-1"></i>
                  </div>
                  <div className="ps-4">
                    <h5>(5 Customer Review)</h5>
                  </div>
                </div>
                <div className="pt-3">
                  <p>
                    Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor
                  </p>
                </div>
                <div className="py-3">
                  <div>
                    {" "}
                    <span className="text-primary fw-bold">SKU:</span>{" "}
                    <a href="" className="text-decoration-none text-dark">
                      Ch-256xl
                    </a>
                  </div>
                  <div>
                    {" "}
                    <span className="text-primary fw-bold">Categories:</span>{" "}
                    <a href="" className="text-decoration-none text-dark">
                      Smart Device, ETC
                    </a>
                  </div>
                  <div>
                    {" "}
                    <span className="text-primary fw-bold">Tags:</span>{" "}
                    <a href="" className="text-decoration-none text-dark">
                      Smart Device, Phone
                    </a>
                  </div>
                </div>
                <div className="py-3 d-flex">
                  <div className="quentity w-25">
                    <button className="bg-dark text-light fs-4 p-1">-</button>
                    <input type="text" value="1" className="w-25 bg-dark text-light fs-4 p-1" />
                    <button className="bg-dark text-light fs-4 p-1">+</button>
                  </div>

                  <button type="button" className="btn btn-primary">
                    Add To Cart
                  </button>
                  <div className="d-flex ms-3">
                    <div className="bg-dark custom_widths me-3 d-flex justify-content-center align-items-center rounded">
                      {" "}
                      <i className="bi bi-heart fs-4 text-white"></i>
                    </div>
                    <div className="bg-dark custom_widths  d-flex justify-content-center align-items-center rounded">
                      {" "}
                      <i className="bi bi-arrow-clockwise fs-4 text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="py-3">
                  <div>
                    <div className="d-flex">
                      <h5 className="me-3 text-primary">Information</h5>
                      <h5>Description</h5>
                    </div>
                    <h5 className="pb-3 border-bottom">Reviews (02)</h5>
                 <div className="py-4">
                     <div className='d-flex mb-2'><h6 className='me-3'>Weight</h6>400 g</div>
                     <div className='d-flex mb-2'><h6 className='me-3'>Dimensions</h6>10 x 10 x 15 cm</div>
                     <div className='d-flex mb-2'><h6 className='me-3'>Materials</h6> 60% cotton, 40% polyester</div>
                     <div className='d-flex mb-2'><h6 className='me-3'>Other Info</h6>American heirloom jean shorts pug seitan letterpress</div>
                 </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingalProduct;
