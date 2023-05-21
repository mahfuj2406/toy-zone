import React from 'react';

const CustomerRiview = () => {
    return (
        <div className='bg-slate-200 border border-slate-300 rounded'>
            <div className="text-center py-5 my-4 rounded">
                <h2 className="text-4xl text-teal-500 font-bold ">Customer Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  m-4 gap-2 p-5'>
                <div className='shadow border rounded-lg p-5'>
                    <h1 className='text-teal-900 text-2xl'>Habib</h1>
                    <p>This is the best site I have ever seen for online toy marketing. I have a great experience with this platform.This is the best site I have ever seen for online toy marketing. I have a great experience with this platform</p>
                </div>
                <div className='shadow border rounded-lg p-5'>
                    <h1 className='text-teal-900 text-2xl'>Shihad Hossain</h1>
                    <p>This is the best site I have ever seen for online toy marketing. I have a great experience with this platform.This is the best site I have ever seen for online toy marketing. I have a great experience with this platform</p>
                </div>
                <div className='shadow border rounded-lg p-5'>
                    <h1 className='text-teal-900 text-2xl'>Jhankar Mahbub</h1>
                    <p>This is the best site I have ever seen for online toy marketing. I have a great experience with this platform.This is the best site I have ever seen for online toy marketing. I have a great experience with this platform</p>
                </div>

            </div>
        </div>
    );
};

export default CustomerRiview;