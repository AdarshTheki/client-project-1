import React, { useState } from 'react';
import Button from '../utils/Button';

const SideBar = () => {
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your form data is: ' + JSON.stringify(formData)); // Corrected alert
        setFormData({ name: '', phone: '' });
    };
    return (
        <div className='px-4 text-gray-light'>
            <Button name='Schedule Site Visit' className='w-full my-2 !py-2' />
            <Button name='+917719971779' className='w-full !py-2' />
            <h2 className='text-xl font-bold py-2 mt-5 text-center'>
                Pre-Register here for Best Offers
            </h2>
            <form className='space-y-4 text-base' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='px-4 py-2 border rounded w-full placeholder:text-gray-500 hover:shadow cursor-pointer'
                    placeholder='Enter Your Name Here...'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type='tel'
                    className='px-4 py-2 border rounded w-full placeholder:text-gray-500 hover:shadow cursor-pointer'
                    placeholder='Phone Number'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
                <label htmlFor='id1' className='flex gap-2 items-start'>
                    <input type='checkbox' id='id1' checked={true} />
                    <p className='text-small'>
                        I Consent to The Processing of Provided Data According To Privacy Policy |
                        Terms & Conditions, I Authorize Prop Solutions 4 U Pvt. Ltd. and its
                        representatives to Call, SMS, Email or WhatsApp Me About Its Products and
                        Offers. This Consent Overrides Any Registration For DNC/NDNC.
                    </p>
                </label>
                <Button
                    name='Pre-Registration Now'
                    className='gradient-button !py-1 !px-3 mx-auto'
                />
            </form>
            <ul className='flex mt-20 py-4 gap-6 items-center text-center text-lg font-medium leading-none'>
                <li>
                    <img src='/call.webp' alt='call' width={40} className='mx-auto' />
                    <p>Instant Call Back</p>
                </li>
                <li>
                    <img src='/car.webp' alt='car' width={40} className='mx-auto' />
                    <p>Free Site Visit</p>
                </li>
                <li>
                    <img src='/pay.webp' alt='pay' width={40} className='mx-auto' />
                    <p>Best Price</p>
                </li>
            </ul>
            <Button name='Request Call Back' className='gradient-button !py-1 !px-3 mx-auto' />
        </div>
    );
};
export default SideBar;
