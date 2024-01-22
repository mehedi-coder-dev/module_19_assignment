import React from "react";
import mini1 from "/public/mini1.webp";
import mini2 from "/public/mini2.webp";
import mini3 from "/public/mini3.webp";

const Item = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h4 className="pb-4">Your cart items</h4>
            <div className="overflow-x-auto">
              <table className="table border">
                <thead>
                  <tr>
                    <th scope="col" className="p-4 bg-light">
                      IMAGE
                    </th>
                    <th scope="col" className="p-4 bg-light">
                      PRODUCT NAME
                    </th>
                    <th scope="col" className="p-4 bg-light">
                      UNTIL PRICE
                    </th>
                    <th scope="col" className="p-4 bg-light">
                      QTY
                    </th>
                    <th scope="col" className="p-4 bg-light">
                      SUBTOTAL
                    </th>
                    <th scope="col" className="p-4 bg-light">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={mini1} alt="" />
                    </td>
                    <td className="pt-5">Modern Smart Phone </td>
                    <td className="pt-5">@$60.00</td>
                    <td>
                      {" "}
                      <div className="quentity w-25 pt-5">
                        <button className=" text-light fs-5 p-1 text-dark border-0">-</button>
                        <input type="text" value="1" className="w-25  text-light fs-5 p-1 text-dark border-0 bg-light" />
                        <button className="text-light fs-5 p-1 text-dark border-0">+</button>
                      </div>
                    </td>
                    <td className="pt-5">$70.00</td>
                    <td className="pt-5">
                      <i className="bi bi-pencil me-3 fs-5"></i>
                      <i className="bi bi-x fs-3"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={mini2} alt="" />
                    </td>
                    <td className="pt-5">Modern Smart Phone </td>
                    <td className="pt-5">@$60.00</td>
                    <td>
                      {" "}
                      <div className="quentity w-25 pt-5">
                        <button className=" text-light fs-5 p-1 text-dark border-0">-</button>
                        <input type="text" value="1" className="w-25  text-light fs-5 p-1 text-dark border-0 bg-light" />
                        <button className="text-light fs-5 p-1 text-dark border-0">+</button>
                      </div>
                    </td>
                    <td className="pt-5">$70.00</td>
                    <td className="pt-5">
                      <i className="bi bi-pencil me-3 fs-5"></i>
                      <i className="bi bi-x fs-3"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={mini3} alt="" />
                    </td>
                    <td className="pt-5">Modern Smart Phone </td>
                    <td className="pt-5">@$60.00</td>
                    <td>
                      {" "}
                      <div className="quentity w-25 pt-5">
                        <button className=" text-light fs-5 p-1 text-dark border-0">-</button>
                        <input type="text" value="1" className="w-25  text-light fs-5 p-1 text-dark border-0 bg-light" />
                        <button className="text-light fs-5 p-1 text-dark border-0">+</button>
                      </div>
                    </td>
                    <td className="pt-5">$70.00</td>
                    <td className="pt-5">
                      <i className="bi bi-pencil me-3 fs-5"></i>
                      <i className="bi bi-x fs-3"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-sm-12 col-md-12 col-lg-12 custom_btn d-flex">
            <button type="button" className="btn btn-outline-primary border-0 bg-light mb-4 me-4 custom_bg_shop fw-bold opacity-75">
              CONTINUE SHOPPING
            </button>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <button type="button" className="btn btn-outline-primary mb-4 border-0 custom_bg_shop fw-bold opacity-75">
                    UPDATE SHOPPING CART
                  </button>
                </div>
                <div className="col-sm-6">
                  <button type="button" className="btn btn-outline-primary mb-4 bg-primary text-light">
                    CLEAR SHOPPING CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card custom_bg_shop border-0 p-3">
              <div className="card-body">
                <h5 className="card-title">Estimate Shipping And Tax</h5>
                <p className="card-text">Enter your destination to get a shipping estimate.</p>
                <label>* Country</label>
                <div className="input-group">
                  <select className="custom-select w-100 p-2 border-0 my-2" id="inputGroupSelect04">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <label>* Region / State</label>
                <div className="input-group">
                  <select className="custom-select w-100 p-2 border-0 my-2" id="inputGroupSelect04">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <label>* Zip/Postal Code</label>
                <input type="text" className="form-control my-2" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                <button type="button" className="btn btn-primary mt-2 w-75 py-2 rounded-0">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card custom_bg_shop border-0 p-3">
              <div className="card-body">
                <h5 className="card-title">Use Coupon Code</h5>
                <p className="card-text">Enter your coupon code if you have one.</p>

                <input type="text" className="form-control my-2" placeholder="" aria-label="" aria-describedby="basic-addon1" />
                <button type="button" className="btn btn-primary mt-2 w-75 py-2 rounded-0">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card custom_bg_shop border-0 p-3">
              <div className="card-body">
                <h5 className="card-title">Cart Total</h5>
                <p className="card-text">
                  Total products <span className="fw-bold ps-3">$260.00</span>
                </p>
                <p className="card-text">Total shipping</p>
                <div className="">
                  <input type="checkbox" aria-label="Checkbox for following text input" /><span className='ps-3'>Standard</span> <span className="ps-5">$20.00</span>
                </div>
                <div className=''>
                  <input type="checkbox" aria-label="Checkbox for following text input" /><span className='ps-3'>Express</span> <span className="ps-5">$20.00</span>
                </div>
                <div className="pt-4 pb-2 text-primary"><span className="fw-bold fs-5">Grand Total</span><span className="ps-5 fw-bold fs-5">$260.00</span></div>
                <button type="button" className="btn btn-primary mt-2 w-75 py-2 rounded-0">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
