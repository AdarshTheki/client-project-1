import React, { useState } from 'react';
import { data } from '../utils';

const Highlight = () => {
    const [selected, setSelected] = useState(1);

    const currentData = data.filter((item) => item.id === selected)[0];

    const { contact, id, image, name, descriptions, price, pricing, services } = currentData;

    return (
        <div className='text-gray-900 sm:text-lg space-y-5 sm:px-10 px-5 pb-5'>
            <h1 className='section-title' id='highlights'>
                Highlight
            </h1>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className=' space-y-2'>
                    <h2 className='text-2xl font-bold'># {name}</h2>
                    <p className='font-semibold'>{price}</p>
                    <p>{descriptions}</p>
                </div>
                <img
                    src={image}
                    alt={'logo' + id}
                    id={name}
                    width={500}
                    className='object-contain'
                />
            </div>
            <ul className='list-item'>
                <strong>Our Services:</strong>
                {services.map((item) => (
                    <li key={item}>✔️ {item}</li>
                ))}
            </ul>
            <p>
                <strong>Pricing:</strong>
                <br />
                {pricing}
            </p>
            <p>
                <strong>Contact Us:</strong> <br />
                {contact.description}
            </p>
            <p>
                📞Phone: {contact.phone}
                <br />
                📧Email: {contact.email}
                <br />
                🌎Website: {contact.website}
            </p>
            <h2 className='font-bold text-xl'>Other products in this category</h2>
            <div className='flex flex-wrap gap-5'>
                {data.map((item) => (
                    <a
                        href='#highlights'
                        onClick={() => setSelected(item.id)}
                        key={item.id}
                        className='w-[200px] border border-primary rounded-2xl overflow-hidden cursor-pointer duration-300 hover:shadow-xl'>
                        <img src={item.image} alt={'logo' + item.id} className='h-[100px] w-full' />
                        <div className='p-3'>
                            <h3 className='font-semibold text-lg line-clamp-2'>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Highlight;
