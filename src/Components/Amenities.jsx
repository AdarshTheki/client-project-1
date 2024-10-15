import Slider from 'react-slick';
import { Button, settings, useScreenSize } from '../utils';

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
    const { slidesShow } = useScreenSize();

    return (
        <div className='py-5'>
            <h2 className='section-title'>Luxurious Amenities</h2>
            <div className='p-5'>
                <Slider {...settings} slidesToShow={slidesShow}>
                    {images &&
                        images.map((item) => (
                            <div key={item.id} className='relative w-full px-1'>
                                <img
                                    src={item.src}
                                    alt={'Amenities_' + item.id}
                                    className='w-full'
                                />
                                <p className='amenities_p'>{item.name}</p>
                            </div>
                        ))}
                </Slider>
            </div>
            <Button name='request all Amenities' className=' mx-auto my-5' />
        </div>
    );
};

export default Amenities;
