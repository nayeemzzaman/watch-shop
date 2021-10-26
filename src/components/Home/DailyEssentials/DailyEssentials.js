import React from 'react';
import './DailyEssentials.css';
import featuredwatch1 from '../../../images/featuredWatch1.png';
import featuredwatch2 from '../../../images/featuredWatch2.png';
import featuredwatch3 from '../../../images/featuredWatch3.png';
import featuredwatch4 from '../../../images/featuredWatch4.png';
import featuredwatch5 from '../../../images/featuredWatch5.png';
import featuredwatch6 from '../../../images/featuredWatch6.png';
import featuredwatch7 from '../../../images/featuredWatch7.png';
import featuredwatch8 from '../../../images/featuredWatch8.png';
import featuredwatch9 from '../../../images/featuredWatch9.png';
import featuredwatch10 from '../../../images/featuredWatch10.png';
import DailyEssentialWatch from '../DailyEssentialWatch/DailyEssentialWatch';
const DailyEssentials = () => {
    const watchData=[
        {
            name: "Legend Silver Dial",
            price: 159.00,
            image: featuredwatch1,
        },
        {
            name: "Nautilo Blue Men’s",
            price: 169.00,
            image: featuredwatch2,
        },
        {
            name: "Silver Stainless Steel",
            price: 159.00,
            image: featuredwatch3,
        },
        {
            name: "Legend Silver Dial",
            price: 159.00,
            image: featuredwatch4,
        },
        {
            name: "Legend Golden Dial",
            price: 159.00,
            image: featuredwatch5,
        },
        {
            name: "Silver Stainless Steel",
            price: 160.00,
            image: featuredwatch6,
        },
        {
            name: "Silver Stainless Steel",
            price: 160.00,
            image: featuredwatch7,
        },
        {
            name: "Silver Stainless Steel",
            price: 160.00,
            image: featuredwatch8,
        },
        {
            name: "Legend Brown Leather",
            price: 160.00,
            image: featuredwatch9,
        },
        {
            name: "Militare Grey Dial",
            price: 160.00,
            image: featuredwatch10,
        },
    ]
    return (
        <section className="daily-essentials">
            <div>
                <h1>Daily Essentials</h1>
            </div>
            <div className="daily-essentials-watches">
                {
                    watchData.map(watch => <DailyEssentialWatch watch={watch}/>)
                }
            </div>
        </section>
    );
};

export default DailyEssentials;