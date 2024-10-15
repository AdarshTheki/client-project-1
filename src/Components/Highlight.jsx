import React from 'react';

const contents = [
    {
        id: 1,
        title: '100 Acre Integrated Township | 13 Acre Greens',
    },
    {
        id: 2,
        title: 'EON IT Park is Only a 10-Min Drive',
    },
    {
        id: 3,
        title: 'EON IT Park is Only a 10-Min Drive',
    },
    {
        id: 4,
        title: 'EON IT Park is Only a 10-Min Drive',
    },
    {
        id: 5,
        title: 'EON IT Park is Only a 10-Min Drive',
    },
];

const Highlight = () => {
    return (
        <div className='sm:p-5 px-2 bg-gray-100 my-2'>
            <h2 className='section-title'>Highlights</h2>
            <section className='sm:columns-2'>
                {contents &&
                    contents.map((item) => (
                        <div key={item.id} className='flex gap-5 items-center p-3'>
                            <img src='/check.svg' alt='check_svg' width='32' />
                            <p className='font-medium'>{item.title}</p>
                        </div>
                    ))}
            </section>
        </div>
    );
};

export default Highlight;
