import { Component } from "react";
import Slider from "react-slick";
import autoSlider1 from '/public/autoSlider1.webp'
import autoSlider2 from '/public/autoSlider2.webp'
import autoSlider3 from '/public/autoSlider3.webp'
import autoSlider4 from '/public/autoSlider4.webp'

export default class Responsive extends Component {
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
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12  border">
        <Slider {...settings} >
          <div className='p-5'>
            <img src={autoSlider1}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider2}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider3}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider4}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider1}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider2}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider3}  alt="" />
          </div>
          <div className='p-5'>
            <img src={autoSlider4}  alt="" />
          </div>
        </Slider>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
