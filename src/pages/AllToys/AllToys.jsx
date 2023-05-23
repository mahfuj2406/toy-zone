
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {
    useTitle('All Toys')
    
    const [searchedText, setSearchedText] = useState("");
    const toyData = useLoaderData();
    const [toys, setToys] = useState(toyData);
    
    const limit = 20;
    let index = 1;

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
            <form className="text-black">
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
                    <tr className="bg-white border">
                        <th className="text-center text-black bg-white">
                            
                        </th>
                        <th className="text-black bg-white">Seller Name</th>
                        <th className="text-center text-black bg-white">Toy Name</th>
                        <th className="text-center text-black bg-white">Sub-category</th>
                        <th className="text-center text-black bg-white">Price</th>
                        <th className="text-center text-black bg-white">Available Quantity</th>
                        <th className="text-center text-black bg-white"></th>
                    </tr>
                </thead>
                <tbody className="text-white">
                    {
                        toys.slice(0, limit).map(toy => <AllToysRow
                            key={toy._id} 
                            toy={toy}
                            index={index++}
                        ></AllToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys; 