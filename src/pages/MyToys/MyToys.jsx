
import MyToysRow from "./MyToysRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const url = `http://localhost:5000/my-toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user]);

// delete function to delete specific row 
    const handleDelete= id=>{
        fetch(`http://localhost:5000/my-toys/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){ 
                alert('Deleted successfully!');
                const remainingToys = toys.filter( toy => toy._id !== id );
                setToys(remainingToys);
            }
        })
    }

    return (
        <div className="overflow-x-auto container mx-auto mb-5">
            <table className="table w-full my-5">
                <thead className="bg-white">
                    <tr className="bg-white">
                        <th className="text-center">
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th className="">Seller Name</th>
                        <th className="text-center">Toy Name</th>
                        <th className="text-center">Sub-category</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Available Quantity</th>
                        <th className="text-center">Rating</th>
                        <th className="text-center w-[500px]">Description</th>
                        <th className="text-center"></th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {
                        toys.map(toy => <MyToysRow
                            key={toy._id} 
                            toy={toy}
                            handleDelete = { handleDelete}
                        ></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;