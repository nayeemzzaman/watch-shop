import React from 'react';
import { Link } from 'react-router-dom';

import instaPhoto1 from '../../../images/insta-img1.jpg';
import instaPhoto2 from '../../../images/insta-img2.jpg';
import instaPhoto3 from '../../../images/insta-img3.jpg';
import instaPhoto4 from '../../../images/insta-img4.jpg';
import instaPhoto5 from '../../../images/insta-img5.jpg';
import instaPhoto6 from '../../../images/insta-img6.jpg';
import instaPhoto7 from '../../../images/insta-img7.jpg';
import instaPhoto8 from '../../../images/insta-img8.jpg';
import instaPhoto9 from '../../../images/insta-img9.jpg';
import instaPhoto10 from '../../../images/insta-img10.jpg';
import instaPhoto11 from '../../../images/insta-img11.jpg';
import instaPhoto12 from '../../../images/insta-img12.jpg';
import { FaInstagram } from 'react-icons/fa';
import './InstaGallery.css';
import { IconContext } from 'react-icons/lib';
import InstaGalleryPhotos from '../InstaGalleryPhotos/InstaGalleryPhotos';
const InstaGallery = () => {
    const instaData=[
        {
            image: instaPhoto1,
        },
        {
            image: instaPhoto2,
        },
        {
            image: instaPhoto3,
        },
        {
            image: instaPhoto4,
        },
        {
            image: instaPhoto5,
        },
        {
            image: instaPhoto6,
        },
        {
            image: instaPhoto7,
        },
        {
            image: instaPhoto8,
        },
        {
            image: instaPhoto9,
        },
        {
            image: instaPhoto10,
        },
        {
            image: instaPhoto11,
        },
        {
            image: instaPhoto12,
        },
    ]
    return (
        <IconContext.Provider value={{ color: 'black', fontSize:"15px"}}>
        <section className="insta-gallery">
            <div className="insta-gallery-container">
                {
                    instaData.map(insta => <InstaGalleryPhotos insta={insta}/>)
                }
                <div className="white-board">
                    <h1><FaInstagram /></h1>
                    <Link className="insta-link">#lusion</Link>
                    <h2>We are on Instagram</h2>
                </div>
            </div>
            
        </section>
        </IconContext.Provider>
    );
};

export default InstaGallery;