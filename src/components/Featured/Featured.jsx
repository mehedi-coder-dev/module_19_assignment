import featured1 from "/public/featured1.webp";
import featured2 from "/public/featured2.webp";
import headphone from "/public/headphone.webp";

const Featured = () => {
  return (
    <div className="Featured mb-2">
      <div className="container">
        <div className="row">
          <h2 className="card-title fw-bold fs-1 text-center mb-4">Featured Offers</h2>
          <p className="card-text fs-5 opacity-75 text-center mb-5">There are many variations of passages of Lorem Ipsum available</p>
          <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
            <div className="card text-center position-relative ">
              <div className="card-body position-absolute w-100">
                <h5 className="card-title text-center fs-3 mt-3">Bluetooth Headphone</h5>
                <p className="card-text text-center fs-4 fw-bold opacity-75">
                  <del className="fw-normal">$48.50</del> - $38.50
                </p>
              </div>

              <img src={headphone} className="card-img-top" alt="..." />

              <div className="card-body position-absolute bottom-0 w-100">
                <div className="card-title text-center d-flex justify-content-center">
                  <div className="custom_width d-flex flex-column justify-content-center align-items-center">
                    <div className="p-2 rounded-circle border border-primary">
                      <div className="rounded-circle  p-3 custom_time d-flex justify-content-center align-items-center fw-bold fs-4  border">0</div>
                    </div>
                    <span className="fw-bold opacity-50 mt-2">HRS</span>
                  </div>
                  <div className="custom_width d-flex flex-column justify-content-center align-items-center">
                    <div className="p-2 rounded-circle border border-primary">
                      <div className="rounded-circle  p-3 custom_time d-flex justify-content-center align-items-center fw-bold fs-4  border">00</div>
                    </div>
                    <span className="fw-bold opacity-50 mt-2">MIN</span>
                  </div>
                  <div className="custom_width d-flex flex-column justify-content-center align-items-center">
                    <div className="p-2 rounded-circle border border-primary">
                      <div className="rounded-circle  p-3 custom_time d-flex justify-content-center align-items-center fw-bold fs-4  border">00</div>
                    </div>
                    <span className="fw-bold opacity-50 mt-2">SEC</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary my-4 px-5 fw-bold fs-5 py-2">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 mb-4">
            <div className="row h-100">
            <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                <div className="card d-flex flex-row h-100">
                  <div className=" border-end d-flex justify-content-center align-items-center">
                    <img src={featured1} className="card-img-top  " alt="..." />
                  </div>

                  <div className="card-body  d-flex flex-column align-items-start justify-content-center ps-5 w-100 h-100 p-3">
                    <div className="border-bottom pb-3 w-100">
                      <h5 className="card-title bg-primary p-1 w-75 ps-3 rounded-end-4 text-light">
                        End In: <span>1:44:33</span>
                      </h5>
                      <h6 className="py-2">Ladies Smart Watch</h6>
                      <span className="fw-bold">
                        <del className="opacity-50 fw-bold">$48.50</del> - $38.50
                      </span>
                    </div>
                    <ul className="py-3 list-unstyled m-0">
                      <li className="fw-bold">
                        Predecessor<span className="fw-normal"> : None.</span>
                      </li>
                      <li className="fw-bold">
                        Support Type<span className="fw-normal"> : Neutral.</span>
                      </li>
                      <li className="fw-bold">
                        Cushioning<span className="fw-normal"> : High Energizing.</span>
                      </li>
                      <li className="fw-bold">
                        Total Weight<span className="fw-normal"> : 300gm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 ">
                <div className="card d-flex flex-row h-100">
                  <div className=" border-end d-flex justify-content-center align-items-center">
                    <img src={featured2} className="card-img-top" alt="..." />
                  </div>

                  <div className="card-body  d-flex flex-column align-items-start justify-content-center ps-5 w-100 h-100 p-3">
                    <div className="border-bottom pb-3 w-100">
                      <h5 className="card-title  p-1 w-75 ps-3 rounded-end-4 text-light bg-primary">
                        End In: <span>1:44:33</span>
                      </h5>
                      <h6 className="py-2">Ladies Smart Watch</h6>
                      <span className="fw-bold">
                        <del className="opacity-50 fw-bold">$48.50</del> - $38.50
                      </span>
                    </div>
                    <ul className="py-3 list-unstyled m-0">
                      <li className="fw-bold">
                        Predecessor<span className="fw-normal"> : None.</span>
                      </li>
                      <li className="fw-bold">
                        Support Type<span className="fw-normal"> : Neutral.</span>
                      </li>
                      <li className="fw-bold">
                        Cushioning<span className="fw-normal"> : High Energizing.</span>
                      </li>
                      <li className="fw-bold">
                        Total Weight<span className="fw-normal"> : 300gm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
