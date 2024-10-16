import React from 'react';
import Slider from 'react-slick';
import { settings, useScreenSize } from '../utils';

const galleryImages = [
    { id: 2, title: 'artistic impression', url: '/2.webp' },
    { id: 3, title: 'artistic impression', url: '/3.webp' },
    { id: 4, title: 'artistic impression', url: '/4.webp' },
    { id: 5, title: 'artistic impression', url: '/5.webp' },
    { id: 6, title: 'artistic impression', url: '/6.webp' },
    { id: 7, title: 'artistic impression', url: '/7.webp' },
];

const Gallery = () => {
    const { slidesShow } = useScreenSize();

    return (
        <div className='p-5 bg-gray-300 pb-10' id='gallery'>
            <h2 className='section-title'>Project Gallery</h2>
            <Slider {...settings} slidesToShow={slidesShow}>
                {galleryImages.map((item) => (
                    <div key={item.id} className='relative w-full px-1'>
                        <img src={item.url} alt={'gallery_' + item.id} className='w-full' />
                        <p className='amenities_p'>{item.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;
