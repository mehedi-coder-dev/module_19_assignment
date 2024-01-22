import React from "react";

const RegisterPage = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center flex-column">
            <h4 className="pb-4">
              <span>Login </span>| <span className='text-primary'>Register</span>
            </h4>
            <div className="p-5 bg-light w-50 shadow">
              <div className="input-group flex-nowrap mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div className="input-group flex-nowrap mb-3">
                <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div className="input-group flex-nowrap mb-3">
                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div className="input-group flex-nowrap ">
                <button className='btn rounded-0 fw-bold  custom_btn_hover' style={{background:'#ddd'}}>REGISTER</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
