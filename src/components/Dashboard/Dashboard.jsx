import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="mb-3">
              {" "}
              <button className="btn btn-primary pe-lg-5 fw-bold w-100 d-flex rounded-0 p-3">DASHBOARD</button>
            </div>
            <div className="mb-3">
              {" "}
              <button className="btn btn-dark pe-lg-5 fw-bold w-100 d-flex rounded-0 p-3">ORDERS</button>
            </div>
            <div className="mb-3">
              {" "}
              <button className="btn btn-dark pe-lg-5 fw-bold w-100 d-flex rounded-0 p-3">DOWNLOADS</button>
            </div>
            <div className="mb-3">
              {" "}
              <button className="btn btn-dark pe-lg-5 fw-bold w-100 d-flex rounded-0 p-3">ADDRESSES</button>
            </div>
            <div className="mb-3">
              {" "}
              <button className="btn btn-dark pe-lg-5 fw-bold w-100 d-flex rounded-0 p-3">ACCOUNT DETAILS</button>
            </div>
            <div className="mb-3">
              {" "}
              <Link
                to="/register"
                className="btn btn-dark pe-lg-5 fw-bold w-100 d-flex rounded-0 p-3"
              >
                LOGOUT
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9">
            <h4 className='fw-bold'>Dashboard</h4>
            <p className='py-3 fs-5'>From your account dashboard. you can easily check & view your <span className='fw-bold text-primary'>recent orders</span>, manage your <span className='fw-bold text-primary'>shipping and billing addresses</span> and <span className='fw-bold text-primary'>Edit your password and account details.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
