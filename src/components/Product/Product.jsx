import { Link } from "react-router-dom";
import productImg from "/public/1.webp";
import productImg2 from "/public/2.webp";
import productImg3 from "/public/3.webp";
import productImg4 from "/public/4.webp";

const Product = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div>
              <button type="button" className="btn border me-3 fw-bold fs-5 opacity-75 px-3 py-2">
                New Arrivals
              </button>
              <button type="button" className="btn btn btn-primary border me-3 fw-bold fs-5 px-3 py-2">
                Top Rated
              </button>
              <button type="button" className="btn border me-3 fw-bold fs-5 opacity-75 px-3 py-2">
                Featured
              </button>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
            <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%", color:"initial" }}>
              <div className="position-relative p-2 b">
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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%", color:'initial' }}>
              <div className="position-relative p-2 b">
                <div className="card-body d-flex position-absolute flex-column">
                  <span className="text-white px-3 p-0 fs-0 rounded custom_width d-block bg-primary mb-1">-10%</span>
                  <span className=" bg-dark text-white px-3 p-0 fs-0 rounded custom_width">New</span>
                </div>

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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%", color:'initial' }}>
              <div className="position-relative p-2 b">
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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%", color:"initial" }}>
              <div className="position-relative p-2 b">
              <div className="card-body d-flex position-absolute flex-column">
                  <span className="text-white px-3 p-0 fs-0 rounded custom_width d-block bg-primary mb-1">-20%</span>
                  <span className=" bg-dark text-white px-3 p-0 fs-0 rounded custom_width">New</span>
                </div>
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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%", color:'initial' }}>
              <div className="position-relative p-2 b">
              <div className="card-body d-flex position-absolute flex-column">
                  <span className="text-white px-3 p-0 fs-0 rounded custom_width d-block bg-primary mb-1">-20%</span>
                  <span className=" bg-dark text-white px-3 p-0 fs-0 rounded custom_width">New</span>
                </div>
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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%",color:'initial' }}>
              <div className="position-relative p-2 b">
              <div className="card-body d-flex position-absolute flex-column">
                  <span className="text-white px-3 p-0 fs-0 rounded custom_width d-block bg-primary mb-1">-20%</span>
                  <span className=" bg-dark text-white px-3 p-0 fs-0 rounded custom_width">New</span>
                </div>
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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%",color:'initial' }}>
              <div className="position-relative p-2 b">
              <div className="card-body d-flex position-absolute flex-column">
                  <span className="text-white px-3 p-0 fs-0 rounded custom_width d-block bg-primary mb-1">-20%</span>
                  <span className=" bg-dark text-white px-3 p-0 fs-0 rounded custom_width">New</span>
                </div>
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
            </Link>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 card_product">
          <Link to='/product' style={{textDecoration:"none"}}>
            <div className="border rounded a" style={{ width: "100%", color:'initial' }}>
              <div className="position-relative p-2 b">
              <div className="card-body d-flex position-absolute flex-column">
                  <span className="text-white px-3 p-0 fs-0 rounded custom_width d-block bg-primary mb-1">-20%</span>
                  <span className=" bg-dark text-white px-3 p-0 fs-0 rounded custom_width">New</span>
                </div>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
