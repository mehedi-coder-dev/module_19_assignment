import React from 'react';
import Layout from '../layout/Layout';
import Checkoutpages from '../components/Checkoutpage/Checkoutpage'
import Banner from '../components/CommonBanner/Banner';

const Checkoutpage = () => {
    return (
        <Layout>
            <Banner val='Checkout'/>
            <Checkoutpages/>
            
        </Layout>
    );
}

export default Checkoutpage;
