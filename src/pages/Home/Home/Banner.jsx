import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-teal-700">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/public/bannerCar.png" className="md:h-[500px]" />
                <div className='text-slate-900 p-5 '>
                    <h1 className="text-5xl font-bold">Welcome to <span className='text-yellow-500'>TOYZONE</span></h1>
                    <p className="py-6">This is the countries largest online toy marketplace. We have more than 1,00,000 customer. Buy with fun and Joy.</p>
                    <button className="btn bg-teal-800 outline hover:bg-yellow-600 text-white border border-teal-900">Visit Our Toy's</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;