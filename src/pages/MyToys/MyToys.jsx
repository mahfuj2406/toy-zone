import { useLoaderData } from "react-router-dom";
import MyToysRow from "./MyToysRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const url = `http://localhost:5000/my-toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className="overflow-x-auto container mx-auto mb-5">
            <form>
                {/* <div className="form-control w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered border-slate-500 bg-white my-5 text-black"
                        value={searchedText}
                        onChange={search} />

                </div> */}
            </form>
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
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {
                        toys.map(toy => <MyToysRow
                            key={toy._id} toy={toy}
                        ></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;