import React from 'react';

const Banner = () => {
    return (
        <div className='fashion py-lg-5 my-3 mb-lg-5'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='card-body d-flex flex-column justify-content-center align-items-center text-light'>
                        <h2 className="card-title fashion_title mb-3">Smart Fashion</h2>
                       <h1 className='card-text fw-bold fashion_des mb-5'>With Smart Devices</h1>
                     <div className='main_btn text-center'>
                     <a className='btn border fw-bold p-3 fs-4 text-light fashion_btn'>Shop All Devices</a>
                     </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
