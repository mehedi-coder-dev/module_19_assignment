import React from 'react';
import Layout from '../layout/Layout'
import Banner from '../components/CommonBanner/Banner'
import ContactPage from '../components/Contact/Contact';

const Contact = () => {
    return (
          <Layout>
             <Banner/>
              <ContactPage/>
          </Layout>
    );
}

export default Contact;
