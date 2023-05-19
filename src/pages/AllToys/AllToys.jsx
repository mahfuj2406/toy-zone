
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";


const AllToys = () => {
    const [searchedText, setSearchedText] = useState("");
    const toyData = useLoaderData();
    const [toys, setToys] = useState(toyData);

    const search = (event) => {
        const matchedName = toyData.filter((name) => {
            return name.toyName.toLowerCase().includes(event.target.value.toLowerCase());
        });
        console.log("matched data: ",matchedName);
        setToys(matchedName);
        setSearchedText(event.target.value);
    };
    return (
        <div className="overflow-x-auto container mx-auto mb-5">
            <form>
                <div className="form-control w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered border-slate-500 bg-white my-5 text-black"
                        value={searchedText}
                        onChange={search} />

                </div>
            </form>
            <table className="table w-full">
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
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody className="text-white">
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