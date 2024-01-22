import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/CommonBanner/Banner';
import Item from '../components/Items/Item';

const Cart = () => {
    return (
        <Layout>
            <Banner val="Cart"/>
            <Item/>
            
        </Layout>
    );
}

export default Cart;
