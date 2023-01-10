import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import banners from '../assets/json/banners.json';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer.js';


const Home = () => {
    const banner = banners.filter((banner) => {
        return banner.id.includes("homeBanner");
    });

    return (
        <div className="mainContainer">
            <Header />
            <div className="homePage">

            <Banner key={banner[0].id} banner={banner[0]} />
            
            <Gallery />

            </div>
            <Footer />
        </div>
    );
};

export default Home;

