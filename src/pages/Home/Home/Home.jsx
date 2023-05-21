import useTitle from "../../../hooks/useTitle";
import Toys from "../Toys/Toys";
import Banner from "./Banner";
import Favourite from "./Favourite";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";


const Home = () => {
    useTitle('Home')
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            {/* <Testimonials></Testimonials> */}
            <Favourite></Favourite>
        </div>
    );
};

export default Home;