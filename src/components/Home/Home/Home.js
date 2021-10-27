import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Blackedition from '../Blackedition/Blackedition';
import DailyEssentials from '../DailyEssentials/DailyEssentials';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Header from '../Header/Header';
import InstaGallery from '../InstaGallery/InstaGallery';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <FeaturedProduct></FeaturedProduct>
            <Blackedition></Blackedition>
            <DailyEssentials></DailyEssentials>
            <InstaGallery></InstaGallery>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;