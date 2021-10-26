import React from 'react';
import './InstaGalleryPhotos.css';
const InstaGalleryPhotos = ({insta}) => {
    return (
        <div className="insta-gallery-photos">
            <img src={insta.image} alt="" />
        </div>
    );
};

export default InstaGalleryPhotos;