import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/CommonBanner/Banner';
import RegisterPage from '../components/RegisterPage/RegisterPage';

const Register = () => {
    return (
        <Layout>
            <Banner val='Login'/>
            <RegisterPage/>
            
        </Layout>
    );
}

export default Register;
