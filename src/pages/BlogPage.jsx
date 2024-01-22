import React from 'react';
import Layout from '../layout/Layout';
import Banner from '../components/CommonBanner/Banner';
import BlogPages from '../components/BlogPages/BlogPages';

const BlogPage = () => {
    return (
          <Layout>
            <Banner val='Blog Single'/>
            <BlogPages/>
          </Layout>
    );
}

export default BlogPage;
