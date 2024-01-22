
import Product from '../components/Product/Product';
import Slider from '../components/Slider/Slider';
import Layout from  '../layout/Layout'
import SmartWatch from '../components/SmartWatch/SmartWatch';
import Banner from '../components/Banner/Banner';
import Featured from '../components/Featured/Featured';
import FeedBack from '../components/ClientFeedBack/FeedBack';
import Slider2 from '../components/Slider2/Slider2';
import Blog from '../components/Blog/Blog';


const Home = () => {
    return (
      <Layout>
        <Slider/>
        <SmartWatch/>
        <Product/>
        <Banner/>
        <Featured/>
        <FeedBack/>
        <Slider2/>
        <Blog/>
      </Layout>
    );
}

export default Home;
