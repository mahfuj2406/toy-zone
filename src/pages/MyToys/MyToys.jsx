
import MyToysRow from "./MyToysRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";


const MyToys = () => {
    const [sortState, setSortState] = useState(1);
    useTitle('My Toys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const url = `https://toy-zone-server-mahfuj2406.vercel.app/my-toys?email=${user.email}&sort=${sortState}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user,sortState]);

    // delete function to delete specific row 
    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-zone-server-mahfuj2406.vercel.app/my-toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remainingToys = toys.filter(toy => toy._id !== id);
                            setToys(remainingToys);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                
            }
        })


    }

    const sortAscending=()=>{
        setSortState(1);
    }
    const sortDescending=()=>{
        
        setSortState(-1);
    }

    return (
        <div className="overflow-x-auto container mx-auto mb-5">
            <button onClick={sortAscending} className="btn  btn-outline">Sort ascending</button>
            <button onClick={sortDescending} className="btn  btn-outline">Sort descending</button>
            <table className="table w-full my-5">
                <thead className="bg-white">
                    <tr className="bg-white text-black border">
                        <th className="text-center bg-white">
                        </th>
                        <th className=" bg-white text-black ">Seller Name</th>
                        <th className="text-center bg-white text-black ">Toy Name</th>
                        <th className="text-center bg-white text-black ">Sub-category</th>
                        <th className="text-center bg-white text-black ">Price</th>
                        <th className="text-center bg-white text-black ">Available Quantity</th>
                        <th className="text-center bg-white text-black ">Rating</th>
                        <th className="text-center bg-white text-black  w-[500px]">Description</th>
                        <th className="text-center bg-white text-black "></th>
                        <th className="text-center bg-white text-black "></th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {
                        toys.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}
                        ></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;