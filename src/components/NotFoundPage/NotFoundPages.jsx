import React from 'react';

const NotFoundPages = () => {
    return (
        <div className='custom_bg_notFound'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="custom_padding">
                      <h2 className='fs-2'>Oops!</h2>
                        <h1>Page not found!</h1>
                        <p className='py-4 opacity-75 fs-5'>You could either go back or go to homepage</p>
                        <div className='d-flex'>
                            <button className='btn btn-primary px-5 rounded-5 text-light me-3 py-3 fw-bold fs-6'>GO BACK</button>
                            <button className='btn btn-dark px-5 rounded-5 text-light py-3 fw-bold fs-6'>GO BACK</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPages;
