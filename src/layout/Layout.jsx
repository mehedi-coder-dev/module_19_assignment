import { Link } from "react-router-dom";
import payment from "../assets/images/payment.webp";

const Layout = (props) => {
  return (
    <>
      <div className="bg-dark p-2" style={{ borderBottom: "1px solid #454545" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6  ">
              <div className="text-light pt-2" style={{ fontSize: "15px" }}>
                World Wide Completely Free Returns and Shipping
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 text-light ">
              <ul className="navbar-nav d-flex flex-row justify-content-end cusotom_top">
                <li className="nav-item px-3" style={{ borderRight: "1px solid #454545" }}>
                  <a className="nav-link " aria-current="page" href="#">
                    <i className="bi bi-telephone-fill pe-2 text-primary"> </i>+012 3456 789
                  </a>
                </li>
                <li className="nav-item px-3 " style={{ borderRight: "1px solid #454545" }}>
                  <a className="nav-link " aria-current="page" href="#">
                    <i className="bi bi-envelope pe-2 text-primary"></i>demo@example.com
                  </a>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" aria-current="page" to="/account">
                    <i className="bi bi-person-fill pe-2 text-primary"></i>Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <a className="navbar-brand fw-bold fs-4" href="#">
                <span className="text-primary">H</span>mart
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
              <form className="d-flex position-relative w-75" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success position-absolute end-0 bg-primary w-25 rounded-0 rounded-right" type="submit">
                  <i className="bi bi-search text-light"></i>
                </button>
              </form>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <ul className="navbar-nav d-flex flex-row justify-content-end">
                <li className="nav-item px-4">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="bi bi-heart fs-5"></i>
                  </a>
                </li>
                <li className="nav-item position-relative">
                  <a className="nav-link" href="#">
                    <i className="bi bi-bag fs-5"></i>
                  </a>
                  <span className="bg-primary text-light position-absolute top-0 end-0 rounded">01</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ">
                  <li className="nav-item dropdown px-4">
                    <Link to="/" className="nav-link  text-light">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item dropdown px-4">
                    <a className="nav-link  text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ABOUT
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown px-4">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PAGES
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/cart">
                          cart
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/checkout">
                          checkout
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/thanksPage">
                          thank you page
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/404">
                          404 page
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/faq">
                          frequently asked
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/blog">
                          blog
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown px-4">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      SHOP
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item  px-4">
                    <Link to="/blog" className="nav-link  text-light">
                      BLOG
                    </Link>
                  </li>
                  <li className="nav-item dropdown px-4">
                    <Link className="nav-link text-light" to="/contact" role="button" aria-expanded="false">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {props.children}

      <div className="py-5" style={{ background: "#f2f8fd" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h3 className="fw-bold mb-4">
                <span className="text-primary">H</span>mart
              </h3>
              <p>Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
              <ul className="navbar-nav mr-auto d-flex flex-row">
                <li className="nav-item active me-3">
                  <a className="nav-link" href="#">
                    <i className="bi bi-facebook fs-3"></i>
                  </a>
                </li>
                <li className="nav-item active me-3">
                  <a className="nav-link" href="#">
                    <i className="bi bi-twitter fs-3"></i>
                  </a>
                </li>
                <li className="nav-item active me-3">
                  <a className="nav-link" href="#">
                    <i className="bi bi-facebook fs-3"></i>
                  </a>
                </li>
                <li className="nav-item active me-3">
                  <a className="nav-link" href="#">
                    <i className="bi bi-instagram fs-3"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h3 className="fw-bold">Services</h3>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    My Account
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Shopping Cart
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Services Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h3 className="fw-bold">My Account</h3>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    My Account
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Shopping Cart
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Services Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h3 className="fw-bold">Contact Info</h3>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Address: Your Address Goes
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Here.
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Phone/Fax: 0123456789
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    Email: demo@example.com
                  </a>
                </li>
                <li className="nav-item active pb-0">
                  <a className="nav-link" href="#">
                    demo@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4" style={{ background: "#e2f2ff " }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="mb-0">
                <span>&copy;</span>2022 <span className="fw-bold">Hmart</span> Made With{" "}
                <span>
                  {" "}
                  <i className="bi bi-heart-fill"></i>
                </span>{" "}
                By Codecarnival .
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
              <div>
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
