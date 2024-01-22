import React, { Component } from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../custom_Slick/Custom_slick";
import Slider1 from "/public/slider1.webp";
import Slider2 from "/public/slider2.webp";

export default class VerticalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow prev='-650px' />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="bg-secondary">
        <div className="container">
          <div className="row px-5 pt-5">
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <Slider
                {...settings}
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
              >
                <div className=' text-light'>
                  <span>Welcome To Hmart</span>
                  <h2 className=''>
                  Your Home <br />
                  
                  Smart Devices & <br />
                  
                  Best Solution 
                  </h2>
                </div>
                <div className="text-light">
                <span>Welcome To Hmart</span>
                  <h2>
                  Your Home <br />
                  
                  Smart Devices & <br />
                  
                  Best Solution 
                  </h2>
                </div>
              </Slider>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Slider
                {...settings}
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
              >
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={Slider1} alt="" />
                </div>
                <div className="d-flex justify-content-center  align-items-center">
                  <img src={Slider2} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
