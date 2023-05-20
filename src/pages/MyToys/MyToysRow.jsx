
import { Link } from 'react-router-dom';

const MyToysRow = ({toy}) => {
    const { _id, toyName, price, sellerName, availableQuantity, subCategory, rating, description } = toy;
    console.log(toy);
    return (
        <tr className='h-[70px]'>
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
            <td className="text-center">{rating}</td>
            <td className="text-center"><p className='overflow-hidden whitespace-nowrap text-ellipsis max-w-sm text-xs'>{description}</p></td>
            <th>
                <Link to={`/update-my-toy/${_id}`}>
                <button className="btn  btn-outline">update</button>
                </Link>
            </th>
            <th>
                <Link to={`/update-my-toy/${_id}`}>
                <button className="btn  btn-outline">delete</button>
                </Link>
            </th>
            <th>
                <Link to={`/update-my-toy/${_id}`}>
                <button className="btn  btn-outline">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToysRow;