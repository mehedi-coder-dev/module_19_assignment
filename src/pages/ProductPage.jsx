import React from "react";
import Layout from "../layout/Layout";
import Banner from '../components/CommonBanner/Banner';
import SingalProduct from "../components/SingalProduct/SingalProduct";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";

const ProductPage = () => {
  return <Layout>
              <Banner/>
              <SingalProduct/>
              <RelatedProduct/>
        </Layout>;
};

export default ProductPage;
