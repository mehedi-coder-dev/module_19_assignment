import Bannerwatch1 from "/public/bannerwatch1.webp";
import Bannerwatch2 from "/public/bannerwatch2.webp";
import Bannerwatch3 from "/public/bannerwatch3.webp";

const SmartWatch = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4">
            <div className="card  border-0 position-relative" style={{ width: "100%" }}>
              <img src={Bannerwatch1} className="card-img-top" alt="..." />

              <div className="card-body align-items-center p-5  w-100 px-5 card_product h-100 position-absolute d-flex flex-column justify-content-end align-items-end">
                   <div className=''>
                   <div>
                  <h5 className="card-title fw-bold opacity-50 fs-2 product">Smart Watch For Your Hand</h5>
                </div>
               <div className='d-flex justify-content-between align-items-center w-100'>
               <h3 className="card-text mb-0">From $29.00</h3>
                <a href="#" className="">
                  <i className="bi bi-arrow-right-circle-fill fs-1"></i>
                </a>
               </div>
                   </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                <div className="position-relative card border-0">
                  
                    <img src={Bannerwatch2} className="card-img-top" alt="..." />

                    <div className="card-body d-flex  p-4 position-absolute bottom-0 w-100 px-5 flex-column card_product h-100 align-items-start justify-content-center">
                      <div className='pb-3 custom_title'>
                      <h5 className="card-title fs-2 fw-bold opacity-50 top-50 custom_title fashion_title">Headphones</h5>
                      </div>
                      <h3 className="card-text mb-0">From $95.00</h3>
                      <a href="#" className="">
                        <i className="bi bi-arrow-right-circle-fill fs-1"></i>
                      </a>
                   
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                <div className="position-relative card border-0">
                  
                    <img src={Bannerwatch3} className="card-img-top" alt="..." />

                    <div className="card-body d-flex justify-content-center  p-4 position-absolute bottom-0 w-100 px-5 flex-column card_product">
                      <div className='pb-3 custom_title'>
                      <h5 className="card-title fs-2 fw-bold opacity-50 top-50 custom_title fashion_title">Headphones</h5>
                      </div>
                      <h3 className="card-text mb-0">From $95.00</h3>
                      <a href="#" className="">
                        <i className="bi bi-arrow-right-circle-fill fs-1"></i>
                      </a>
                   
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

export default SmartWatch;
