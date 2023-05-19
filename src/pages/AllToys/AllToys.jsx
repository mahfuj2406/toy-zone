import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";


const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="overflow-x-auto container mx-auto mb-5">
            <form>
                <div className="form-control w-1/2 mx-auto">
                    <input type="text" placeholder="Search" className="input input-bordered border-slate-500 bg-white my-5 text-black" />
                </div>
            </form>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
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
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <AllToysRow
                            key={toy._id} toy={toy}
                        ></AllToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;