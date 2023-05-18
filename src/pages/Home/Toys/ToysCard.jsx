import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ToysCard = ({ toy }) => {
    const { _id, toyName, imageURL, price, rating } = toy;
    return (
        <div className="card w-full glass m-2">
            <figure><img src={imageURL} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p className="font-bold">Price : {price}$ </p>
                <p className=""><StarIcon className="h-6 w-6 text-yellow-500 inline me-2" />{rating} </p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn hover:bg-teal-900 text-white bg-teal-700">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;