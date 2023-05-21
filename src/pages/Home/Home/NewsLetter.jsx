import React from 'react';

const NewsLetter = () => {
    return (
        <div className='container '>
            <div className="text-center py-5 my-4 rounded">
                <h2 className="text-4xl text-teal-500 font-bold ">Subscribe to Our NewsLetter</h2>
            </div>
            <div className="hero w-full bg-slate-200">
                <div className="hero-content w-full p-8">
                    {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='m-3'>
                        <h1 className="text-4xl font-bold text-slate-700 mb-8">Always remain upto-date</h1>
                        <div className='mt-3'>
                            <input className=' p-3 rounded-lg bg-slate-300 me-3' type="email" placeholder='enter your email' />
                            <button className="btn bg-teal-900 hover:bg-teal-800">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;