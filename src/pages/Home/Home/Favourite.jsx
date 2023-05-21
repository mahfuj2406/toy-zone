import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Favourite = () => {
    const [toys, setToys] = useState([]);
    const [favouriteToys, setFavouriteToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-zone-server-mahfuj2406.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [])

    useEffect(()=>{
        const favToys =  toys.filter(toy => toy.rating> 4.6);
    setFavouriteToys(favToys);
    },[toys])


    return (
        <div className='border p-5 my-3 rounded bg-slate-200'>
            <h1 className='text-4xl text-teal-500 font-bold text-center'>Most Reviewed Toys</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-5'>
                {
                    favouriteToys.map(toy => 
                        <div key={toy._id} className="card border w-full glass m-2 md:flex-row">
                            <figure><img className='w-[200px] rounded-lg' src={toy.imageURL} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-slate-800 text-lg md:text-3xl">{toy.toyName}</h2>
                                <div className='flex items-center'>
                                    <span className='text-slate-600 text-xs font-bold me-4 '>{toy.subCategory}</span>
                                    <span className=""><StarIcon className="h-6 w-6 text-yellow-500 inline me-2" />{toy.rating} </span>
                                </div>
                                <span className="link ">View full details</span>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Favourite;