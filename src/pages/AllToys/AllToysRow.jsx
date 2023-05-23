
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy,index }) => {
    const { _id, toyName, price, sellerName, availableQuantity, subCategory } = toy;
    console.log(toy)
    return (
        <tr className=''>
            <th className="text-center text-black bg-white">
                {index}
            </th>
            <td className=" text-black bg-white">
                <div className="text-start">
                    <div>
                        <div className="font-bold">{sellerName? sellerName : <></>}</div>
                    </div>
                </div>
            </td>
            <td className="text-center text-black bg-white">
                {toyName}
            </td>
            <td className="text-center text-black bg-white">{subCategory}</td>
            <td className="text-center text-black bg-white">{price}</td>
            <td className="text-center text-black bg-white">{availableQuantity}</td>
            <th className='bg-white'>
                <Link to={`/toy/${_id}`}>
                <button className="btn  btn-outline bg-teal-700">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysRow;