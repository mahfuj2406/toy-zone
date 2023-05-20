import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    return (
        <div className="container mx-auto bg-white my-10 p-5 ">
            <div className="w-full">
                <div className="text-center w-full md:w-1/2 mx-auto">
                    <h1 className="text-3xl font-bold p-3 border border-teal-900 rounded">Update Your Toy : <span className='text-teal-800'>{toy.toyName}</span> </h1>
                </div>
                <form  className="w-full max-w-lg card shadow-2xl p-5 bg-white mx-auto my-5">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="seller-name">Seller Name</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="sellerName" defaultValue={toy.sellerName} id="seller-name" type="text" placeholder="Enter seller name" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="toy-name">
                                Toy Name
                            </label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" defaultValue={toy.toyName} name="toyName" id="toy-name" type="text" placeholder="Enter toy name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email Address</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="email" defaultValue={toy.sellerEmail} id="email" type="email" />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="photo-URL">Toy photo URL</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="photoURL" defaultValue={toy.imageURL} id="photo-URL" type="text" />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2">Sub-category</label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required defaultValue={toy.subCategory} name="selectInput">
                                    <option disabled hidden>select</option>
                                    <option>Regular Car</option>
                                    <option>Sports Car</option>
                                    <option>Truck</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="price" defaultValue={toy.price} id="price" type="text" placeholder="0" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">Available Quantity</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="quantity" defaultValue={toy.availableQuantity} id="quantity" type="number" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="rating">Ratings</label>
                            <input className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500" name="rating" defaultValue={toy.rating} id="rating" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">Description</label>
                            <textarea className="textarea h-40 textarea-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray-500 leading-6" name="description" defaultValue={toy.description} id="description" type="text" required></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn bg-teal-800 text-white border-0 hover:border hover:bg-teal-900">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;