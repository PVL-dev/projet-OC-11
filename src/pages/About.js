import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import banners from '../assets/json/banners.json';
import Footer from '../components/Footer.js';

const About = () => {
    const banner = banners.filter((banner) => {
        return banner.id.includes("aboutBanner");
    });

    return (
        <div>
            <Header />
            
            <Banner key={banner[0].id} banner={banner[0]} />

            

            <Footer />
        </div>
    );
};

export default About;

