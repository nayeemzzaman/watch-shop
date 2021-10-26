import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    let imageSrc1, imageSrc2, imageSrc3, imageSrc4;
    // const sliderRef = useRef(null);
    // console.log(sliderRef);
    return (
        <section className="header">
            <Carousel >
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
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </section>
    );
};

export default Header;