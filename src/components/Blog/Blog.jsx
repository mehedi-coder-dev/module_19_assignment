import { Link } from "react-router-dom";
import blog1 from "/public/blog1.webp";

const Blog = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <h1 className="fw-bold text-center">Latest Blog</h1>
          <p className="text-center py-3 fs-5 opacity-75">There are many variations of passages of Lorem Ipsum available</p>
          <div className="col-sm-6 col-md-6 col-lg-6 mb-5">
            <div className="card d-flex flex-row custom_blog border-0">
              
                <div className="rounded custom_wh">
                <Link to="/blog">
                  <img src={blog1} className="card-img-top h-100 w-100" alt="..." />
                  </Link>
                </div>
             
              <div className="card-body px-4 p-0 custom_margin p-3 ps-5">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="fw-bold opacity-75">
                    <i className="bi bi-calendar4-week fs-6 me-2 text-primary"></i>27,Jun 2030
                  </span>
                  <span className="fw-bold opacity-75">
                    <i className="bi bi-person-fill fs-5 me-2 text-primary"></i>Wild Nick
                  </span>
                </div>
                <Link to="/blog" style={{textDecoration:"none"}}>
                <h5 className="card-title fs-4 fw-bold">10 Quick Tips About Smart Product</h5>
                </Link>
                <p className="card-text py-4 fs-5">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                <Link to='/blog' className="btn btn-primary blog_btn p-2 fw-bold px-3 fs-5 px-5 rounded-4">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 mb-5">
            <div className="card d-flex flex-row custom_blog border-0">
              <div className="rounded custom_wh">
              <Link to="/blog">
                  <img src={blog1} className="card-img-top h-100 w-100" alt="..." />
                  </Link>
              </div>
              <div className="card-body px-4 p-0 custom_margin p-3 ps-5">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="fw-bold opacity-75">
                    <i className="bi bi-calendar4-week fs-6 me-2 text-primary"></i>27,Jun 2030
                  </span>
                  <span className="fw-bold opacity-75">
                    <i className="bi bi-person-fill fs-5 me-2 text-primary"></i>Wild Nick
                  </span>
                </div>
                <Link to="/blog" style={{textDecoration:"none"}}>
                <h5 className="card-title fs-4 fw-bold">10 Quick Tips About Smart Product</h5>
                </Link>
                <p className="card-text py-4 fs-5">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
                <Link to='/blog' className="btn btn-primary blog_btn p-2 fw-bold px-3 fs-5 px-5 rounded-4">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
