import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Gallery = () => {
    // aos implementation 
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 border my-5 rounded">
            <h1 className='font-bold text-3xl mb-5 text-slate-800 text-center'>Gallery</h1>
            <div className="-m-1 grid grid-cols-2 md:grid-cols-3 md:flex-wrap gap-3 md:-m-2 pb-10">

                <div className="border rounded-lg" data-aos="fade-down-right">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://www.xootz.co.uk/media/catalog/product/cache/da421aa4609f0c2165cda2879fbba662/t/y/ty6194bl_bmw_x5_blue_01.jpg" />
                    </div>
                </div>
                <div className="border rounded-lg" data-aos="fade-down">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://m.media-amazon.com/images/I/7196CirAm+L._SX679_.jpg" />
                    </div>
                </div>
                <div className="border rounded-lg" data-aos="fade-down-left">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://cdn.shopify.com/s/files/1/0149/8336/4708/products/170216_CarCarrier_Left2-Square_1024x1024@2x.jpg?v=1679957914" />
                    </div>
                </div>
                <div className="border rounded-lg" data-aos="fade-up-right">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://freepngimg.com/thumb/car/148145-small-car-toy-photos-free-hq-image.png" />
                    </div>
                </div>
                <div className="border rounded-lg" data-aos="fade-up">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://cdn.shopify.com/s/files/1/0539/4402/5275/products/661051-Mini-Light-Blue-Truck.jpg?v=1654528475" />
                    </div>
                </div>
                <div className="border rounded-lg " data-aos="fade-up-left">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://cdn.shopify.com/s/files/1/0266/8177/0077/products/71fX1pSR2nL._SL1500_1024x1024@2x.jpg?v=1651217851" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;