import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/CommonBanner/Banner';
import FrequentlyPage from '../components/FrequentlyPage/FrequentlyPage';

const Frequently = () => {
    return (
        <Layout>
            <Banner val='Faq'/>
           <FrequentlyPage/>
            
        </Layout>
    );
}

export default Frequently;
