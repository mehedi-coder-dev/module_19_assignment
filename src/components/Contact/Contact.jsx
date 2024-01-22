import React from "react";

const ContactPage = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <form className=" custom_bg_color p-lg-5 text-center">
              <h4 className="pb-4 text-center fs-2">Send A Quest</h4>
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control p-3 fs-5"
                      id="exampleInputEmail1"
                      placeholder="Enter name*"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-lg-6  mb-3">
                    <input
                      type="email"
                      className="form-control p-3 fs-5"
                      id="exampleInputEmail1"
                      placeholder="Enter email*"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control p-3 fs-5" id="exampleInputPassword1" placeholder="Subject*" />
              </div>
              <div className="mb-3">
                <textarea className="border w-100 p-4 " placeholder=" Your Message*"></textarea>
              </div>
              <button type="submit" className="btn btn-primary fs-5 fw-bold px-5 py-2 mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" custom_bg_color p-lg-5 ">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card text-center p-3 ">
              <div className="card-body">
                <i className="bi bi-house text-primary custom_fs"></i>
                <h5 className="card-title">Address</h5>
                <p className="card-text">Your address goes here. 123 Your Location</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card text-center p-3 ">
              <div className="card-body">
                <i className="bi bi-telephone text-primary custom_fs"></i>
                <h5 className="card-title">Phone No</h5>
                <p className="card-text m-0">+012 345 67 89</p>
                <p className="card-text m-0">+012 345 67 89</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card text-center p-3 ">
              <div className="card-body">
                <i className="bi bi-envelope text-primary custom_fs"></i>
                <h5 className="card-title">Email/Web</h5>
                <p className="card-text m-0">demo@example.com</p>
                <p className="card-text m-0">www.example.com</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe></div>
    </div>
  );
};

export default ContactPage;
