import React from "react";

const Checkoutpages = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <form className=" p-lg-5">
              <h4 className="pb-4 fs-2">Billing Details</h4>
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="" className="py-3">
                      First Name
                    </label>
                    <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="" className="py-3">
                      Last Name
                    </label>
                    <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="pb-3">
                  Company Name
                </label>
                <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="input-group">
                <select className="custom-select w-100 p-2  my-2 border" id="inputGroupSelect04">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="pb-3">
                  Street Address
                </label>
                <input
                  type="text"
                  className="form-control p-2 fs-5"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="House number and street name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="pb-3">
                  Street Address
                </label>
                <input
                  type="text"
                  className="form-control p-2 fs-5"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Apartment, suite, unit etc."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="pb-3">
                  Town / City
                </label>
                <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="" className="py-3">
                      State / County
                    </label>
                    <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="" className="py-3">
                      Postcode / ZIP
                    </label>
                    <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="" className="py-3">
                      Phone
                    </label>
                    <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="" className="py-3">
                      Email Address
                    </label>
                    <input type="text" className="form-control p-2 fs-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </div>
              </div>
              <div className="">
                <input type="checkbox" aria-label="Checkbox for following text input" />
                <span className="ps-3">Create an account?</span>{" "}
              </div>

              <div className="py-4">
                <h5>Additional information</h5>
                <h6 className="py-2">Order notes</h6>
                <textarea cols="30" rows="10" className="w-100" placeholder="Notes about your order, e.g. special notes for delivery.">
                  {" "}
                </textarea>
              </div>
              <div className="">
                <input type="checkbox" aria-label="Checkbox for following text input" />
                <span className="ps-3">Ship to a different address?</span>{" "}
              </div>
            </form>
          </div>
          <div className="col-lg-4 mt-5">
            <h4 className="card-title">Your order</h4>
            <div className="card custom_bg_shop border-0 p-3 mt-3 ">
              <div className="card-body">
                <div className="d-flex justify-content-between border-bottom">
                  <p className="fw-bold">Product</p>
                  <span className="fw-bold ps-3">Total</span>
                </div>
                <div className="d-flex justify-content-between  pt-4">
                  <p className="">Product Name X 1</p>
                  <span className=" ps-3">$100</span>
                </div>
                <div className="d-flex justify-content-between pb-2 border-bottom">
                  <p className="">Product Name X 1</p>
                  <span className=" ps-3">$100</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-3">
                  <p className="fw-bold">Shipping</p>
                  <span className="ps-3">Free shipping</span>
                </div>
                <div className="d-flex justify-content-between border-bottom py-3">
                  <p className="fw-bold">Total</p>
                  <span className="fw-bold ps-3">$100</span>
                </div>
                <div className="pt-3">
                  <p className="fw-bold">Direct bank transfer</p>
                  <span className="">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                </div>
                <div className="py-2">
                  <p className="fw-bold">Check payments</p>
                </div>
                <div className="">
                  <p className="fw-bold">Cash on delivery</p>
                </div>
              </div>
            </div>
            <div className='w-100 mt-3'>
              <button className="btn btn-primary px-5 w-100 fw-bold">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpages;
