import { ArrowLeftIcon, ArrowRightIcon, ArrowRightLeft } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Button from '../utils/Button';

const images = [
    { id: 1, name: 'Fitness Zone', src: '/Fitness Zone.webp' },
    { id: 2, name: 'Multi Purpose Hall', src: '/Multi Purpose Hall.webp' },
    { id: 3, name: 'Swimming Pool', src: '/Swimming Pool.webp' },
    { id: 4, name: 'Kids Play Area', src: '/Kids Play Area.webp' },
    { id: 5, name: 'Open Air Theatre', src: '/Open Air Theatre.webp' },
    { id: 6, name: 'Terrace Club', src: '/Terrace Club.webp' },
    { id: 7, name: 'Vertical Garden', src: '/Vertical Garden.webp' },
];

const Amenities = () => {
    const sliderRef = useRef(null);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenSize(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: screenSize < 800 ? 1 : 3, // Number of slides to show
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className='m-2 bg-pink-100 p-4'>
            <h2 className='text-primary font-bold text-3xl text-center py-5 underline'>
                Luxurious Amenities
            </h2>
            <div className='relative p-5'>
                <Slider {...settings} ref={sliderRef}>
                    {images &&
                        images.map((item) => (
                            <div key={item.id} className='relative w-full pl-2'>
                                <img
                                    src={item.src}
                                    alt={'Amenities_' + item.id}
                                    className='w-full'
                                />
                                <p className=' absolute bottom-5 left-5 py-2 px-5 rounded bg-gray-dark/80 text-white text-sm font-semibold'>
                                    {item.name}
                                </p>
                            </div>
                        ))}
                </Slider>
                <button
                    onClick={handlePrev}
                    className='absolute scale-75 top-1/2 left-2 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full'>
                    <ArrowLeftIcon />
                </button>
                <button
                    onClick={handleNext}
                    className='absolute scale-75 top-1/2 right-2 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white'>
                    <ArrowRightIcon />
                </button>
            </div>
            <Button name='request all Amenities' className=' mx-auto my-5' />
        </div>
    );
};

export default Amenities;
