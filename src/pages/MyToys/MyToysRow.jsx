
import { Link } from 'react-router-dom';

const MyToysRow = ({toy, handleDelete}) => {
    const { _id, toyName, price, sellerName, availableQuantity, subCategory, rating, description } = toy;
    console.log(toy);

    return (
        <tr className='h-[70px] bg-white'>
            <th className="text-center bg-white">
            </th>
            <td className=" bg-white text-black">
                <div className="text-start">
                    <div>
                        <div className="font-bold">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td className="text-center bg-white text-black">
                {toyName}
            </td>
            <td className="text-center bg-white text-black">{subCategory}</td>
            <td className="text-center bg-white text-black">{price}</td>
            <td className="text-center bg-white text-black">{availableQuantity}</td>
            <td className="text-center bg-white text-black">{rating}</td>
            <td className="text-center bg-white text-black"><p className='overflow-hidden whitespace-nowrap text-ellipsis max-w-sm text-xs'>{description}</p></td>
            <th className='bg-white '>
                <Link to={`/update-my-toy/${_id}`}>
                <button className="btn  btn-outline bg-teal-700 text-white">update</button>
                </Link>
            </th>
            <th className='bg-white '>
                <button onClick={()=>handleDelete(_id)} className="btn  btn-outline bg-teal-700 text-white">X</button>
            </th>
        </tr>
    );
};

export default MyToysRow;