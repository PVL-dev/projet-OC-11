import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../assets/json/logements.json';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer.js';

const Accomodation = () => {
    const accomodationID = useParams().id;
    const accomodationData = logements.filter((accomodation) => {
        return accomodation.id.includes(accomodationID);
    });
    
    const title = accomodationData[0].title;
    const pictures = accomodationData[0].pictures;
    const location = accomodationData[0].location;
    const tags = accomodationData[0].tags;
    const host = accomodationData[0].host;
    const rate = accomodationData[0].rating;
    const description = accomodationData[0].description;
    const equipments = accomodationData[0].equipments;

    return (
        <div className="mainContainer">
            <Header />
            <div className="accomodationPage">
                <Carrousel  pictures={pictures} />

                <div className="accomodationPage__header">
                    <section className="accomodationPage__header__details">
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <ul className="tags">
                            {tags.map((tag, index) => (
                                <li className="tags__item" key={`${tag}-${index}`}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="accomodationPage__header__host">
                        <div className="accomodationPage__header__host__details">
                            <p>{host.name}</p>
                            <img src={host.picture} alt="" />
                        </div>
                        <div className="accomodationPage__header__host__rating">
                            <Rating rate={rate} />
                        </div>
                    </section>
                </div>

                <section className="accomodationPage__dropdown">
                    <Dropdown title="Description" content={description} size="small"/>
                    <Dropdown title="Équipements" content={equipments} size="small"/>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Accomodation;

