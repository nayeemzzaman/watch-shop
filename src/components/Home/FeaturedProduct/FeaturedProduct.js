import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProduct.css'
import featuredwatch1 from '../../../images/featuredWatch1.png';
import featuredwatch2 from '../../../images/featuredWatch2.png';
import featuredwatch3 from '../../../images/featuredWatch3.png';
import featuredwatch4 from '../../../images/featuredWatch4.png';
import featuredwatch5 from '../../../images/featuredWatch5.png';
import featuredwatch6 from '../../../images/featuredWatch6.png';
import featuredwatch7 from '../../../images/featuredWatch7.png';
import featuredwatch8 from '../../../images/featuredWatch8.png';
import FeaturedWatches from '../FeaturedWatches/FeaturedWatches';
import {GrPrevious, GrNext} from 'react-icons/gr';
import Slider from "react-slick";
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import CartContext from '../../../Context/Context';

const featuredWatches = [
    {
        "key": 'FP1234',
        name1: "Legend Silver Dial",
        name2: "Legend Black Dial",
        price: 159.00,
        image1: featuredwatch1,
        image2: featuredwatch8,
    },
    {
        "key": 'FP1235',
        name1: "Nautilo Blue Men’s",
        name2: "Tourbillon Silver Dial",
        price: 169.00,
        image1: featuredwatch2,
        image2: featuredwatch7,
    },
    {
        "key": 'FP1236',
        name1: "Silver Stainless Steel",
        name2: "Silver Stainless Steel",
        price: 159.00,
        image1: featuredwatch3,
        image2: featuredwatch6,
    },
    {
        "key": 'FP1237',
        name1: "Legend Golden Dial",
        name2: "Legend Silver Dial",
        price: 159.00,
        image1: featuredwatch5,
        image2: featuredwatch4
    },
    {
        "key": 'FP1238',
        name2: "Legend Golden Dial",
        name1: "Legend Black Dial",
        price: 179.00,
        image2: featuredwatch5,
        image1: featuredwatch8,
    },
    {
        "key": 'FP1239',
        name1: "Nautilo Blue Men’s",
        name2: "Silver Stainless Steel",
        price: 160.00,
        image1: featuredwatch2,
        image2: featuredwatch6,
        
    },
]
const FeaturedProduct = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        speed: 500,
        arrows: false,
    };
    const sliderRef = useRef(null);
    useEffect( ()=>{
        //console.log(sliderRef.current);
    },[sliderRef])
    // const { cartItem } = useContext(CartContext);
    // const handleAddToCart = (watch) => {
    //     const watchKey = watch.key;
    //     const sameWatch = cartItem.find(item => item.key===watchKey);
    //     let count = 1;
    //     if(sameWatch){
    //         count = sameWatch.quantity+1;
    //         sameWatch.quantity = count;
    //     }
    //     else{
    //         watch.quantity = 1;
    //     }
    //     addToDatabaseCart(watchKey, count);
    // }
    return (
        <section className="featuredProduct">
            <div className="featuredProduct-heading">
                <h2>Featured Products</h2>
                <div className="slider-btn">
                    <div className="prev-btn"
                         onClick={()=>sliderRef.current.slickPrev()}>
                        <GrPrevious/>
                    </div>
                    <div className="next-btn"
                         onClick={()=>sliderRef.current.slickNext()}>
                        <GrNext/>
                    </div>
                </div>
            </div>
            <div className="featuredProduct-body">
                <div className="blackFriday">
                    <h1>Black Friday</h1>
                    <h4>SALE UP TO 50% OFF</h4>
                    <Link ><button className="shopNowBtn">Shop Now</button></Link>
                </div>
                
                <Slider ref={sliderRef} {...settings}>
                    {
                            featuredWatches.map(watch => <FeaturedWatches key={watch.key} watch={watch} />)
                    }
                </Slider>

            </div>
        </section>
    );
};
export default FeaturedProduct;
