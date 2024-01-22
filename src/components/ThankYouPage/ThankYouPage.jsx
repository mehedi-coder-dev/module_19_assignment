import React from 'react';

const ThankYouPage = () => {
    return (
        <div className='custom_bg_shop'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className='text-center pt-lg-5'>
                        <i className="bi bi-check2-circle fs-1 text-success fw-bold custom-size"></i>
                        </div>
                        <div className='py-4 text-center fs-5 opacity-75'>
                        Thank you for ordering in our store. You will receive a confirmation email shortly.
                        </div>
                        <div className='text-center pb-lg-5'>
                            <button className='btn btn-primary fw-bold py-3 px-4'>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYouPage;
