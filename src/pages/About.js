import React from 'react';
import banners from '../assets/json/banners.json';
import about from '../assets/json/about.json';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer.js';

const About = () => {
    const banner = banners.filter((banner) => {
        return banner.id.includes("aboutBanner");
    });

    return (
        <div className="mainContainer">
            <Header />
            <div className="aboutPage">
                <Banner key={banner[0].id} banner={banner[0]} />

                <section className="aboutPage__dropdown">
                    {about.map((aboutElmt, index) => (
                        <Dropdown key={index} title={aboutElmt.title} content={aboutElmt.content} size={aboutElmt.size}/>
                    ))}
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;

