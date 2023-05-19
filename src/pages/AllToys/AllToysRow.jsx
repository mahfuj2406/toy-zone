import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const { _id, toyName, price, sellerName, availableQuantity, subCategory } = toy;
    console.log(toy)
    return (
        <tr className=''>
            <th className="text-center">
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td className="">
                <div className="text-start">
                    <div>
                        <div className="font-bold">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {toyName}
            </td>
            <td className="text-center">{subCategory}</td>
            <td className="text-center">{price}</td>
            <td className="text-center">{availableQuantity}</td>
            <th>
                <Link to={`/toy/${_id}`}>
                <button className="btn  btn-outline">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysRow;