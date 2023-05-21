import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { StarIcon } from "@heroicons/react/24/solid";


const SingleDetails = () => {
    useTitle('All Toys > View one');
    const toy = useLoaderData();
    const { toyName, imageURL, price, rating, sellerName, sellerEmail, availableQuantity, description } = toy;

    return (
        <div className="container mx-auto">
            <div className="hero border m-3 rounded">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={imageURL} className="w-[auto] rounded-lg shadow-2xl" />
                    <div className="text-slate-800">
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <p className="py-6 ">{description}</p>
                        <p className="p-6 border rounded bg-slate-300">
                            <span className="font-bold border p-1 bg-slate-100 rounded">Price: </span>
                            <span className="text-black font-bold md:text-3xl ml-2">{price}$</span>
                            <span className="font-bold ms-5">Available : </span> <span>{availableQuantity} pcs</span>
                            <span className="font-bold ms-5 me-2">Rating  </span><StarIcon className="h-6 w-6 text-yellow-500 inline me-1" /> {rating} <br />
                            <span className="mt-5 inline-block"><span className="font-bold me-4">Seller Name: </span> <span>{sellerName}</span></span> <br />
                            <span className=""><span className="font-bold me-4">Seller email: </span> <span>{sellerEmail}</span></span> <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;