import React, { useEffect, useRef, useState } from 'react';
import Button from '../utils/Button';
import { ArrowDownToLine, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Slider from 'react-slick';

const sliders = [
    { id: 1, imageUrl: '/banner1.webp' },
    { id: 2, imageUrl: '/banner2.webp' },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
};

const Home = () => {
    const sliderRef = useRef(null);

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

    return (
        <div className='w-full overflow-hidden relative'>
            <div className='pb-5 relative w-full overflow-hidden'>
                <button
                    onClick={handlePrev}
                    className='absolute scale-75 bottom-6 left-1/3 z-10 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white'>
                    <ArrowLeftIcon size={20} />
                </button>
                <button
                    onClick={handleNext}
                    className='absolute scale-75 bottom-6 right-1/3 z-10 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white'>
                    <ArrowRightIcon size={20} />
                </button>
                <Slider {...settings} ref={sliderRef}>
                    {sliders.map((i) => (
                        <img
                            key={i.id}
                            src={i.imageUrl}
                            alt={i.id}
                            className='max-h-[90vh] min-h-[300px] bg-cover bg-center'
                        />
                    ))}
                </Slider>
            </div>
            <div className='lg:absolute sm:w-2/3 w-full mx-auto relative text-lg leading-relaxed lg:top-10 text-[#212529] lg:w-fit text-center lg:left-10 sm:p-5 bg-white rounded-3xl shadow-lg'>
                <p>New Launch</p>
                <h2 className='text-[28px] font-bold'>Godrej Park Springs</h2>
                <p className='font-medium'>By Godrej Properties</p>
                <p className='opacity-80'>At Kharadi-Manjari Road, Pune</p>
                <div className='bg-primary offerAnimation p-2'>
                    <ul className='list-disc font-bold p-2 list-inside border-2 text-white border-dotted'>
                        <li>Avail Special Launch Offers</li>
                        <li>3 Level Premium Amenities</li>
                    </ul>
                </div>
                <p className='text-[20px]'>Luxury 2 & 3 BHK Homes Starting At</p>
                <h1 className='font-medium text-[32px]'>₹ 76.50 Lacs* Onwards</h1>
                <Button name='enquire now' className='w-3/2 mt-3 text-base mx-auto' />
            </div>
            <div className='md:flex gap-5 items-start md:p-10 p-5 w-full'>
                <div className='space-y-4 pb-5'>
                    <h2 className='text-primary text-3xl'>About Godrej Park Springs </h2>
                    <p className='font-medium'>
                        Godrej Park Springs is a premium residential development spanning 4.88
                        acres, comprising 750 meticulously designed units across four 22-story
                        towers. The project offers spacious 2BHK and 3BHK apartments, with 2BHK
                        units ranging from 610 to 620 sq. ft. and 3BHK units approximately 800 sq.
                        ft. Scheduled for possession in September 2029, Godrej Park Springs
                        perfectly blends luxury with tranquility, providing an ideal investment
                        opportunity for discerning homebuyers seeking modern, serene living spaces
                    </p>
                    <Button leftIcon={<ArrowDownToLine />} name='Request Brochure' />
                </div>
                <img src='/About.webp' alt='About_webp' width='400' />
            </div>
        </div>
    );
};

export default Home;
