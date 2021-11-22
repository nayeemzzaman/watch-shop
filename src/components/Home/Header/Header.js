import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import {GrPrevious, GrNext} from 'react-icons/gr';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import './Header.css';

const Header = () => {
    let imageSrc1, imageSrc2, imageSrc3, imageSrc4;
    // const sliderRef = useRef(null);
    // console.log(sliderRef);
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        speed: 500,
        arrows: false,
        autoplay: true,
        afterChange: (currentSlide)=>{
            let idx = (currentSlide ? currentSlide : 0) + 1;
            document.getElementsByClassName("sliderNumDynamic")[0].innerHTML = idx;
        }
    };
    
    const sliderRef = useRef(null);
    useEffect( ()=>{
        //console.log(sliderRef.current);
    },[sliderRef])
    const previousClick=()=>{
        const currentSlideNum = parseInt(document.getElementsByClassName("sliderNumDynamic")[0].innerHTML);
        const fixedSlideNum = parseInt(document.getElementsByClassName("sliderNumFixed")[0].innerHTML);
        //console.log(currentSlideNum);
        let updateSlideNum;
        if(currentSlideNum===1){
            updateSlideNum = fixedSlideNum;
        }
        else {
            updateSlideNum = currentSlideNum-1;
        }
        document.getElementsByClassName("sliderNumDynamic")[0].innerHTML = updateSlideNum;
    }
    const nextClick=()=>{
        const currentSlideNum = parseInt(document.getElementsByClassName("sliderNumDynamic")[0].innerHTML);
        const fixedSlideNum = parseInt(document.getElementsByClassName("sliderNumFixed")[0].innerHTML);
        //console.log(currentSlideNum);
        let updateSlideNum;
        if(currentSlideNum===4){
            updateSlideNum = 1;
        }
        else {
            updateSlideNum = currentSlideNum+1;
        }
        document.getElementsByClassName("sliderNumDynamic")[0].innerHTML = updateSlideNum;
    }
    return (
        <section className="header">
            <div className="slider-btn">
                    <div className="prev-btn"
                         onClick={()=>{sliderRef.current.slickPrev(); previousClick();}}
                         >
                        < BsArrowLeft/>
                    </div>
                    <div className="slider-background">
                        <h2 className="sliderNumDynamic">1</h2>
                        <h2 className="sliderNumFixed">4</h2>
                    </div>
                    <div className="next-btn"
                         onClick={()=>{sliderRef.current.slickNext(); nextClick();}}>
                        <BsArrowRight/>
                    </div>
                </div>
            <Slider id='slideShow' ref={sliderRef} {...settings}>
                <Carousel.Item>
                    <img
                        className="c-image d-block w-100"
                        id="c-img1"
                        src= "https://i.ibb.co/zHHp5gW/carosol-image1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h4>Trending Products</h4>
                        <h1>Everything<br/>That's New And Now</h1>
                        <Link ><button className="shopNowBtn">Shop Now</button></Link>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="c-image d-block w-100"
                        id="c-img2"
                        src="https://i.ibb.co/H7B34F4/carosol-image2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                        <h4>Trending Products</h4>
                        <h1>Everything<br/>That's New And Now</h1>
                        <Link ><button className="shopNowBtn">Shop Now</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="c-image d-block w-100"
                        id="c-img3"
                        src="https://i.ibb.co/vPLGmCn/carosol-image3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                        <h4>Trending Products</h4>
                        <h1>Everything<br/>That's New And Now</h1>
                        <Link ><button className="shopNowBtn">Shop Now</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="c-image d-block w-100"
                        id="c-img4"
                        src="https://i.ibb.co/ZVs5yMy/carosol-image4.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                        <h4>Trending Products</h4>
                        <h1>Everything<br/>That's New And Now</h1>
                        <Link ><button className="shopNowBtn">Shop Now</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Slider>
            
        </section>
    );
};

export default Header;