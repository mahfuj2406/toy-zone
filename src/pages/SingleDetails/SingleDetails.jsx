import { useLoaderData } from "react-router-dom";


const SingleDetails = () => {
    const toy = useLoaderData();
    const { toyName, imageURL, price, rating, sellerName, sellerEmail, availableQuantity, description } = toy;

    return (
        <div className="container mx-auto">
            <div className="hero border">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={imageURL} className="w-[auto] rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
            <div className="hero p-5 m-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <p className="py-6">Price: <span className="text-black font-bold md:text-3xl">{price}$</span> </p>
                        <span>Seller Name: {sellerName}</span> <br />
                        <span>Seller email: {sellerName}</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;