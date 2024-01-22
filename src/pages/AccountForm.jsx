import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/CommonBanner/Banner';
import Dashboard from '../components/Dashboard/Dashboard';

const AccountForm = () => {
    return (
        <Layout>
            <Banner val='Account'/>
            <Dashboard/>
        </Layout>
    );
}

export default AccountForm;
