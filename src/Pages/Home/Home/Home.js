import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ReviewSection from '../ReviewSection/ReviewSection';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Service />
            <Products />
            <Blog />
            <ReviewSection />
            <Footer />
        </div>
    );
};

export default Home;