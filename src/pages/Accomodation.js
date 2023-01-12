import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../assets/json/logements.json';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer.js';
import Page404 from './Page404';

const Accomodation = () => {
    const accomodationID = useParams().id;
    const accomodationData = logements.find(logements => logements.id === accomodationID);

    if (accomodationData) {
        const title = accomodationData.title;
        const pictures = accomodationData.pictures;
        const location = accomodationData.location;
        const tags = accomodationData.tags;
        const host = accomodationData.host;
        const rate = accomodationData.rating;
        const description = accomodationData.description;
        const equipments = accomodationData.equipments;

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
    } else {
        return <Page404 />
    };
};

export default Accomodation;

