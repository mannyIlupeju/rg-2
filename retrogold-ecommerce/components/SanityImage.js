import React from 'react';
import NextSanityImage from 'next-sanity-image';

const SanityImage = ({asset, alt}) => {
    return (
        <NextSanityImage
        image={asset}
        alt={alt}
        
        />
    );
        
};

export default SanityImage;